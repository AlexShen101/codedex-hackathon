import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'black': '#161214',
      'green': '#628A22',
      'white': '#FFF9EC',
      'beige': '#CEB195',
      'light-brown': '#7B4F44',
      'dark-brown': '#442500',
      'pink': '#C8A2C8',
    }
  },
  plugins: [],
};
export default config;
