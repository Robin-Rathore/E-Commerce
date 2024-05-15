/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
                  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
                  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
                  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          PrimaryColor: "#ffffff", // A subtle peach tone for warmth
          SecondaryColor: "#52b6aa", // A light golden shade for elegance
          DarkColor: "#002d46", // A deeper, warm brown for contrast
          ExtraDarkColor: "#002d46", // A rich, earthy tone for emphasis
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  };
  