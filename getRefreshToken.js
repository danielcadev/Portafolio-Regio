require("dotenv").config(); // Carga variables de entorno desde .env.local
const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID, // Reemplaza con tu ID de cliente
  process.env.GMAIL_CLIENT_SECRET, // Reemplaza con tu secreto de cliente
  "https://developers.google.com/oauthplayground" // URL de redireccionamiento
);

const scopes = ["https://mail.google.com/"];

// Genera la URL de autorización
const url = oauth2Client.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: scopes,
});

console.log("Visita esta URL para obtener el código de autorización:", url);

// ****************************************************************************************
// IMPORTANTE: Después de obtener el código de autorización desde la URL de redirección,
// cópialo y pégalo en la variable 'code' de abajo, luego descomenta y ejecuta la función getRefreshToken().
// ****************************************************************************************

// const code = "PEGA_AQUI_TU_CODIGO_DE_AUTORIZACION"; // Reemplaza con el código obtenido

// async function getRefreshToken() {
//   try {
//     const { tokens } = await oauth2Client.getToken(code);
//     console.log("Refresh Token:", tokens.refresh_token);
//     console.log("Access Token:", tokens.access_token);
//   } catch (err) {
//     console.error("Error al obtener el refresh token:", err);
//   }
// }

// getRefreshToken();