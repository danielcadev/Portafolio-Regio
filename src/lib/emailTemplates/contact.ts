export function getContactEmailTemplate({
    name,
    email,
    message,
  }: {
    name: string;
    email: string;
    message: string;
  }) {
    const currentYear = new Date().getFullYear();
  
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nuevo Mensaje de Contacto</title>
        </head>
        <body style="
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          background-color: #f9fafb;
        ">
          <div style="
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
          ">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="
                color: #111827;
                font-size: 24px;
                font-weight: 600;
                margin: 0;
              ">Nuevo Mensaje de Contacto</h1>
              <p style="
                color: #6b7280;
                font-size: 16px;
                margin-top: 8px;
              ">Recibido a través del formulario web</p>
            </div>
  
            <div style="
              background-color: #f3f4f6;
              border-radius: 12px;
              padding: 24px;
              margin-bottom: 24px;
            ">
              <div style="margin-bottom: 16px;">
                <h2 style="
                  color: #111827;
                  font-size: 18px;
                  font-weight: 600;
                  margin: 0 0 8px 0;
                ">Información del Contacto</h2>
                <p style="
                  color: #374151;
                  font-size: 16px;
                  margin: 0;
                  padding: 8px 0;
                  border-bottom: 1px solid #e5e7eb;
                ">
                  <strong style="color: #111827;">Nombre:</strong> ${name}
                </p>
                <p style="
                  color: #374151;
                  font-size: 16px;
                  margin: 0;
                  padding: 8px 0;
                ">
                  <strong style="color: #111827;">Email:</strong> 
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">
                    ${email}
                  </a>
                </p>
              </div>
  
              <div>
                <h2 style="
                  color: #111827;
                  font-size: 18px;
                  font-weight: 600;
                  margin: 24px 0 8px 0;
                ">Mensaje</h2>
                <div style="
                  background-color: #ffffff;
                  border-radius: 8px;
                  padding: 16px;
                  color: #374151;
                  font-size: 16px;
                  line-height: 1.6;
                ">${message}</div>
              </div>
            </div>
  
            <div style="
              text-align: center;
              color: #6b7280;
              font-size: 14px;
              margin-top: 32px;
              padding-top: 16px;
              border-top: 1px solid #e5e7eb;
            ">
              <p style="margin: 0;">
                Este es un mensaje automático enviado desde RegioSoft Web.
              </p>
              <p style="margin: 8px 0 0 0;">
                © ${currentYear} RegioSoft. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;
  }