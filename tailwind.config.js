module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9fbff",
          100: "#f6f6f6",
          400: "#c4c4c4",
          500: "#a6a6a6",
          600: "#6a7270",
          800: "#434041",
          900: "#0d1624",
          "50_03": "#fafafa",
          "500_02": "#ababab",
          "400_01": "#acb2b0",
          "50_04": "#f4f8ff",
          "50_01": "#f8f9fa",
          "400_02": "#c1c1c1",
          "50_02": "#f9f9f9",
          "900_02": "#1b222d",
          "900_03": "#11142d",
          "800_01": "#3a3939",
          "800_02": "#3c4043",
          "600_19": "#7e7e7e19",
          "900_01": "#242424",
          "600_01": "#737373",
          "500_01": "#979797",
          "800_2b": "#4545452b",
          "700_11": "#55555511",
          "700_51": "#67676751",
        },
        black: {
          900: "#000000",
          "900_04": "#000c0a",
          "900_0c": "#0000000c",
          "900_0e": "#0000000e",
          "900_3f": "#0000003f",
          "900_4c": "#0000004c",
          "900_e4": "#000000e4",
          "900_14": "#00000014",
          "900_19": "#00000019",
          "900_29": "#00000029",
          "900_01": "#090b0d",
          "900_02": "#130e00",
          "900_03": "#060405",
        },
        white: {
          A700_0c: "#ffffff0c",
          A700: "#ffffff",
          A700_b2: "#ffffffb2",
          A700_87: "#ffffff87",
        },
        blue: {
          50: "#e0ebff",
          100: "#c6e2fa",
          400: "#3a96dd",
          600: "#378fd3",
          900: "#1c3aa9",
          "50_01": "#d2e4ff",
          A700_02: "#0a58ff",
          A700: "#0061ff",
          A700_01: "#0065ff",
          A200_02: "#468ee5",
          A200_01: "#4285f4",
          A200: "#6193f6",
        },
        blue_gray: {
          50: "#eaecf0",
          100: "#d6d5d5",
          200: "#bac1ce",
          300: "#9ea8ba",
          400: "#74839d",
          600: "#5f6c86",
          700: "#424c5d",
          800: "#394250",
          900: "#262b35",
          "100_01": "#d6dae2",
          "900_02": "#2b2d2d",
          "100_02": "#d6d6d6",
          "400_01": "#75839d",
          "900_01": "#333438",
          "800_01": "#394150",
          "900_7f": "#3333337f",
        },
        teal: { 50: "#dfecea", 500: "#02957d", 700: "#027c68" },
        colors5: "#000000ff",
        colors7: "#ffffffff",
        amber: {
          300: "#ffd964",
          400: "#f2cb2a",
          500: "#feb909",
          "500_01": "#fbbc04",
        },
        deep_orange: { 100: "#fec1c1", 400: "#ff7545" },
        light_blue: {
          400: "#1ba9ff",
          600: "#179bd7",
          A700: "#0086ed",
          A100: "#67d7fd",
        },
        colors: "#0061ffff",
        red: { 500: "#ea4335", 600: "#f22a2a", 700: "#d03329" },
        green: {
          300: "#8be48b",
          400: "#65bc6a",
          600: "#349765",
          700: "#398f3e",
          800: "#29752b",
          900: "#236823",
          "600_01": "#34a853",
        },
        colors1: "#090b0dff",
        colors3: "#d03329ff",
        deep_purple: { 200: "#b580d8" },
        colors4: "#130e00ff",
        indigo: { 800: "#253b80", 900: "#222d65" },
        colors6: "#262b35ff",
        colors2: "#74839dff",
      },
      fontFamily: {
        gilroy: "Gilroy",
        lato: "Lato",
        roboto: "Roboto",
        urbanist: "Urbanist",
        opensans: "Open Sans",
        poppins: "Poppins",
      },
      boxShadow: {
        bs9: "0px 12px  31px 0px #7e7e7e19",
        bs: "0px 0px  10px 4px #55555511",
        bs2: "0px 1px  2px 0px #00000019",
        bs1: "0px 4px  10px 4px #0000000c",
        bs5: "0px 15px  20px 0px #4545452b",
        bs4: "0px 4px  10px 4px #55555511",
        bs3: "0px 11px  57px 0px #00000019",
        bs6: "0px 0.5px  1.49px 0px #00000014",
        bs8: "0px 2.78px  5.7px 0px #00000019",
        bs7: "3.01px 0.8px  14.26px 0px #0000003f",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#378fd3,#3a96dd,#3a96dd)",
      },
      fontWeight: { fw: 250 },
      textShadow: {
        ts: "0px 0.53px  1.59px #00000014",
        ts1: "0px 0.93px  2.25px #67676751",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
