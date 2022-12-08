const colors = {
  text: {
    primary: "#184D47",
    secondary: "#B5EAEA",
    tertiary: "#65C18C",
    body: "#2C3333",
    white: "#ffffff",
    black: "#000000",
    lightGrey: "rgba(117, 117, 117, 1)",
  },
};

const theme = {
  breakpoints: [768, 1200],
  page: {
    wrapper: {
      maxWidth: ["100%", "70%"],
      padding: 20,
    },
  },
  colors: {
    primary: colors.text.primary,
    secondary: colors.text.secondary,
    tertiary: colors.text.tertiary,
    white: colors.text.white,
    black: colors.text.black,
    lightGrey: colors.text.lightGrey,
  },
  textStyles: {
    color: {
      heading: colors.text.primary,
      body: colors.text.body,
      link: colors.text.tertiary,
    },
    fontSizes: {
      xl: [48, 60, 72],
      lg: [24, 30, 36],
      md: [20, 24],
      body: 16,
    },
    fontWeight: {
      heading: 700,
      body: 400,
    },
  },
};
export default theme;
