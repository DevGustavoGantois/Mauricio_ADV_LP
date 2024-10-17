import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Montserrat , sans-serif',
      secondary: 'Monotype Corsiva, sans-serif',
    },
    container: {
      padding: {
        DEFAULT: '0',
      },
    },
    extend: {
      colors: {
        blue_primary: '#003764',
        gray_primary: '#444444',
        white_primary: '#E9E9E9',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1038px',
      },
      backgroundImage: {
        'bg-Hero': "url('/ImgHeroBg.webp')",
        'bg-Contact': "url('/ImgContact.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
