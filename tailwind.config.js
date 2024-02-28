/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bgwhite: "#FFFFFF",
        bg_green: "#DBF698",
        bg_darkgreen: "#171A13",
        bg_logingreen: "##e7fab6",
      },
      textColor: {
        textwhite: "#FFFFFF",
        text_green: "#DBF698",
        text_darkgreen: "#171A13",
      },
      borderColor: {
        border_green: "#171A13",
      },
      shadowColor: {
        shadow_green: "#171A13",
      },
    },
  },
  plugins: [],
};
