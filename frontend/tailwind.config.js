/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          PrimaryColor: "#ffffff", // A subtle peach tone for warmth
          SecondaryColor: "#52b6aa", // A light golden shade for elegance
          DarkColor: "#002d46", // A deeper, warm brown for contrast
          ExtraDarkColor: "#002d46", // A rich, earthy tone for emphasis
        },
        
      },
    },
    plugins: [],
  };
  