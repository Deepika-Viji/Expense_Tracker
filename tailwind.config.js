/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "blue-color": "#EEF4F8",
        "side-color": "#FFFFFF",
        "tracker-color": "#F7F7F7",
        "button-color": "#5B88F7",
        "5000-bg": "#F9F9F9",
        Dbcolor: "#EEF5F7",
        button: "#4676F9",
        bg_table: "#F9F9F9",
        filter: "#EDEDED",
        bgblack: "#0A0A0A",
        bggreen: "#9FFB64",
        bgwhite: "#FFFFFF",
      },
      textColor: {
        "Company-text": "#008AF2",
        "income-text": "#5787F4",
        "expense-text": "#FB77A4",
        "balance-text": "#B4DEA6",
        "transaction-text": "#34D3EB",
        textblack: "#0A0A0A",
        textgreen: "#9FFB64",
        textwhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
