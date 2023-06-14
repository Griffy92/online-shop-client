/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppinsSemi:["Poppins, SemiBold"],
        poppinsLight: ["Poppins, ExtraLight"],
        poppinsMed:["Poppins, Medium"]
      },
      fontWeight: {
        'semi-bold': '600',
        'extra-light': '200',
        'medium': '500',
      }
    },
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
  ],
}

