import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from "googleapis";

const OAuth2 = google.auth.OAuth2;

export async function POST(request: NextRequest) {
  const { name, email, message, token, honeypot } = await request.json();

  console.log("Datos recibidos en la API:", { name, email, message, token, honeypot });

  // Verificar el honeypot
  if (honeypot) {
    console.warn("Posible bot detectado (honeypot)");
    return NextResponse.json({ message: "Bot detected" }, { status: 400 });
  }

  // Verificar reCAPTCHA
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    { method: "POST" }
  );
  const recaptchaData = await recaptchaResponse.json();

  console.log("Respuesta de reCAPTCHA:", recaptchaData);

  if (!recaptchaData.success || recaptchaData.score < 0.5) {
    console.error("La verificación de reCAPTCHA falló:", recaptchaData);
    return NextResponse.json({ message: "reCAPTCHA verification failed" }, { status: 400 });
  }

  const oauth2Client = new OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  console.log("Cliente OAuth2 creado:", oauth2Client);

  oauth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  });

  console.log("Credenciales de OAuth2 establecidas");

  // Corregir la función getAccessToken para manejar correctamente la posibilidad de que el token sea null
  const accessToken = await new Promise<string>((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        console.error("Error al obtener el token de acceso:", err);
        if (err.response && err.response.data) {
            console.error("Detalles del error:", err.response.data);
          }
        reject("Failed to create access token :(");
      } else if (token) {
        console.log("Access Token:", token);
        resolve(token);
      } else {
        reject("Access token is undefined or null");
      }
    });
  });

  // Crear un transportador de Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER,
      accessToken,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    },
  });

  console.log("Transportador de Nodemailer creado:", transporter);

  // Configurar el correo electrónico
  const mailOptions = {
    from: email,
    to: "daniel.ca.pe207@gmail.com",
    subject: `Nuevo mensaje de ${name} desde el formulario de contacto`,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  };

  console.log("Opciones de correo configuradas:", mailOptions);

  try {
    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info);
    return NextResponse.json({ message: "Correo enviado con éxito" }, { status: 200 });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json({ message: "Error al enviar el correo" }, { status: 500 });
  }
}