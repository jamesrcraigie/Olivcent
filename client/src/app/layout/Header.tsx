import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, ThemeProvider, createTheme } from "@mui/material";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

const getSwitchTheme = (darkMode: boolean) => {
  return createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          track: {
            backgroundColor: "tan", // Off state track color
          },
          thumb: {
            width: 24,
            height: 24,
            backgroundColor: darkMode ? "violet" : "orange",
          },
          switchBase: {
            "&.Mui-checked": {
              color: "#ffffff", // Thumb color when on
              "& + .MuiSwitch-track": {
                backgroundColor: "violet", // On state track color
              },
            },
          },
        },
      },
    },
  });
};

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar
      position="static"
      className="custom-appbar"
      style={{
        backgroundColor: darkMode ? "#333" : "#a67c52",
        boxShadow: "none", // This removes the shadow
        borderBottom: "none", // This removes the bottom line, if it's a border
      }}
      elevation={0} // This is another way to remove the shadow
    >
      <Toolbar>
        <Typography variant="h6" className="custom-typography">
          Olivcent
        </Typography>
        <Typography variant="body1" style={{ width: "140px" }}>
          {/* Fixed width here */}
          {darkMode ? "Dark Mode On" : "Dark Mode Off"}
        </Typography>
        <ThemeProvider theme={getSwitchTheme(darkMode)}>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </ThemeProvider>
      </Toolbar>
    </AppBar>
  );
}
