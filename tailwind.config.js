/** @type {import('tailwindcss').Config} */
module.exports = {
     darkMode: false
    content: [
      "./src/**/*.{ts,tsx}",   // scansiona tutti i componenti e le pagine
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0062FF",   // cambia qui se il design usa un altro colore principale
        },
      },
    },
    plugins: [require("@tailwindcss/typography")],
  };
  
