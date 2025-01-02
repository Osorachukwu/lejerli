/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your file structure
    "./node_modules/@shadcn/ui/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#201537",
        secondaryColor: "#8041FF"
      },
      boxShadow: {
        customBoxShadow: '0px 2px 4px rgba(25,27,49,0.25)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
