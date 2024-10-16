/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#45d345",
        secondary: "#0063ff",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        "custom-bg1":
          "url('https://www.meshnigeria.org/wp-content/uploads/2024/03/DSCF4799-scaled.jpg')",
        "custom-bg2":
          "url('https://www.meshnigeria.org/wp-content/uploads/2024/02/DSCF4708-scaled.jpg')",
        "custom-bg3":
          "url('https://www.meshnigeria.org/wp-content/uploads/2024/02/DSCF4655-scaled.jpg')",
        "custom-bg4":
          "url('https://www.meshnigeria.org/wp-content/uploads/2024/03/IMG_3129-scaled.jpg')",
        "custom-bg5":
          "url('https://www.meshnigeria.org/wp-content/uploads/2024/03/IMG_3076-scaled.jpg')",
        "custom-bg6":
          "url('https://www.meshnigeria.org/wp-content/uploads/2024/08/IMG-20240717-WA0021.jpg')",
        "custom-bg7":
          "url('https://www.meshnigeria.org/wp-content/uploads/2024/08/IMG-20240717-WA0008.jpg')",
        "custom-bg9":
          "url('https://www.meshnigeria.org/wp-content/uploads/2024/08/IMG-20240826-WA0069.jpg')",
        "custom-bg10":
          "url('https://www.meshnigeria.org/wp-content/uploads/2022/03/Pegi-Medical-Outreach-01.jpg')",
        "custom-bg11":
          "url('https://www.meshnigeria.org/wp-content/uploads/2024/01/IMG_20230902_131753_484-scaled.jpg')",
        "custom-bg12":
          "url('https://www.meshnigeria.org/wp-content/uploads/2024/01/IMG_20230902_131753_484-scaled.jpg')",
        "custom-bg13":
          "url('https://www.meshnigeria.org/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-05-at-00.30.12_8bc70fe6.jpg')",
        "custom-bg14":
          "url('https://www.meshnigeria.org/wp-content/uploads/2023/11/IMG_0908-scaled.jpg')",
        "custom-bg15":
          "url('https://www.meshnigeria.org/wp-content/uploads/2024/02/DSCF4816-scaled.jpg')",
        "custom-bg16":
          "url('https://www.meshnigeria.org/wp-content/uploads/2023/12/IMG_2738-scaled.jpg')",
        "custom-bg18":
          "url('https://www.meshnigeria.org/wp-content/uploads/2023/08/IMG_2679-edited-scaled.jpg')",
        "custom-bg19":
          "url('https://www.meshnigeria.org/wp-content/uploads/2023/05/330611461_163821249842947_8959061991730445476_n.jpg')",
      },
    },
  },
  plugins: [],
};
