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
      main: "#ff69b4",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fffafa",
    },
    text: {
      primary: "#36454f",
      secondary: "#ff69b4",
    },
  },
});

export default theme;
