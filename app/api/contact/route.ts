import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const { name, email, message } = await request.json();

    // Verifica las variables de entorno
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not Set');
   
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // usa SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        // No falla si hay problemas con el certificado
        rejectUnauthorized: false
      }
    });

    let mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Muestra el nombre del remitente
      replyTo: email, // Permite que se responda directamente al correo del usuario
      to: 'daniel.ca.pe207@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Mensaje enviado:', info.response);
      return NextResponse.json({ message: 'Mensaje enviado con éxito' }, { status: 200 });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
    }
}
