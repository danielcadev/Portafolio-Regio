// lib/nodemailer.ts
import nodemailer from 'nodemailer';

if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
  console.error('Variables disponibles:', {
    EMAIL_USER: !!process.env.EMAIL_USER,
    EMAIL_APP_PASSWORD: !!process.env.EMAIL_APP_PASSWORD
  });
  throw new Error('Faltan credenciales de email en las variables de entorno');
}

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD // Asegúrate de que coincida con el nombre en .env.local
  },
});

// Verificar la conexión al iniciar
transporter.verify(function(error, success) {
  if (error) {
    console.error('Error en la configuración del email:', error);
  } else {
    console.log('Servidor listo para enviar emails');
  }
});