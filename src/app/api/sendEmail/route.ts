// app/api/sendEmail/route.ts
import { NextResponse } from "next/server";
import { transporter } from "@/lib/nodemailer";
import { getContactEmailTemplate } from "@/lib/emailTemplates/contact";
import axios from "axios";

async function verifyRecaptcha(token: string) {
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    );
    return response.data.success;
  } catch (error) {
    console.error('Error en verificación reCAPTCHA:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    // Validar variables de entorno
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD || !process.env.RECAPTCHA_SECRET_KEY) {
      return NextResponse.json(
        { error: "Error de configuración del servidor" },
        { status: 500 }
      );
    }

    // Validar datos del body
    const { name, email, message, token } = await request.json();

    if (!name || !email || !message || !token) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Verificar reCAPTCHA
    const recaptchaValid = await verifyRecaptcha(token);
    if (!recaptchaValid) {
      return NextResponse.json(
        { error: "Verificación de reCAPTCHA fallida" },
        { status: 400 }
      );
    }

    // Enviar email
    try {
      await transporter.sendMail({
        from: `"RegioSoft Web 🚀" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `💌 Nuevo contacto de ${name}`,
        html: getContactEmailTemplate({ name, email, message }),
      });
      
      return NextResponse.json({ 
        success: true,
        message: "Mensaje enviado correctamente" 
      });

    } catch (emailError) {
      console.error('Error al enviar email:', emailError);
      return NextResponse.json(
        { error: "Error al enviar el email" },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error general:', error);
    return NextResponse.json(
      { error: "Error del servidor" },
      { status: 500 }
    );
  }
}