import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: '"Parisienne", Arial',
  },
  palette: {
    primary: {
      main: "#36454f",
    },
    secondary: {
      main: "#ffcc47",
    },
    tertiary: {
        main: "#ffffff",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fffafa",
    },
    text: {
      primary: "#36454f",
      secondary: "#ffcc47",
      tertiary: "#ffffff",
    },
  },
});

export default theme;
