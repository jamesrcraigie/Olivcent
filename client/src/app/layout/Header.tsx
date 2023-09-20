import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <AppBar position="static" className="custom-appbar">
      <Toolbar>
        <Typography variant="h6" className="custom-typography">
          Olivcent
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
