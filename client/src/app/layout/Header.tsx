import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";
// import { useStoreContext } from "../context/StoreContext";
// import { useAppSelector } from "../store/configureStore";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

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
            backgroundColor: "tan",
          },
          thumb: {
            width: 24,
            height: 24,
            backgroundColor: darkMode ? "violet" : "orange",
          },
          switchBase: {
            "&.Mui-checked": {
              color: "#ffffff",
              "& + .MuiSwitch-track": {
                backgroundColor: "violet",
              },
            },
          },
        },
      },
    },
  });
};

export default function Header({ darkMode, handleThemeChange }: Props) {
  const {basket} = useStoreContext();

  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

  // const { basket } = useAppSelector((state) => state.basket);
  // const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <AppBar
      position="static"
      className="custom-appbar"
      style={{
        backgroundColor: darkMode ? "#333" : "#a67c52",
        boxShadow: "none",
        borderBottom: "none",
      }}
      elevation={0}
    >
      <Toolbar sx={{ padding: "0 2rem" }}>
        {/* Main flex container to vertically stack items */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
        >
          {/* Logo - Olivcent */}
          <Typography className="custom-typography" sx={{ marginBottom: 1 }}>
            Olivcent
          </Typography>

          {/* Flex container for navigation links and icons */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            {/* Left Side - Mid Links */}
            <List sx={{ display: "flex", gap: 2 }}>
              {midLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  {title.toUpperCase()}
                </ListItem>
              ))}
              <IconButton
                component={Link} to='/basket'
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
              >
                <Badge badgeContent={itemCount} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </List>

            {/* Right Side - Toggle, Cart, and Right Links */}
            <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
              <List sx={{ display: "flex", gap: 1 }}>
                {rightLinks.map(({ title, path }) => (
                  <ListItem
                    component={NavLink}
                    to={path}
                    key={path}
                    sx={navStyles}
                  >
                    {title.toUpperCase()}
                  </ListItem>
                ))}
              </List>
              <IconButton
                component={Link}
                to="/basket"
                size="large"
                edge="end"
                color="inherit"
              >
                {/* Uncomment below if you want to show the itemCount */}
                {/* 
              <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCart />
              </Badge>
              */}
              </IconButton>
              <ThemeProvider theme={getSwitchTheme(darkMode)}>
                <Switch checked={darkMode} onChange={handleThemeChange} />
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
