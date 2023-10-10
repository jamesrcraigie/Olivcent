import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  GlobalStyles,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./styles.css";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";

function App() {
  const {setBasket} = useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if (buyerId) {
      agent.Basket.get()
        .then(basket => setBasket(basket))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
    else {
      setLoading(false);
    }
  }, [setBasket])

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  if (loading) return <LoadingComponent message="Initialising app..." />

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#faf3e0",
            color: theme.palette.mode === "dark" ? "#faf3e0" : "#5c4f40",
          },
          ".product-price": {
            color: theme.palette.mode === "dark" ? "#faf3e0" : "#a67c52",
          },
          ".title-header": {
            color: theme.palette.mode === "dark" ? "#333" : "#d4b996",
          },
          "#header, .custom-appbar.custom-appbar": {
            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#a67c52",
          },
          ".header-nav a": {
            color: theme.palette.mode === "dark" ? "#faf3e0" : "#333", // This needs to be updated
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "#555" : "#d4b996",
            },
          },
          "#main": {
            backgroundColor: theme.palette.mode === "dark" ? "#555" : "#f7e9d7",
          },
          "#shopify-section-template": {
            backgroundColor: theme.palette.mode === "dark" ? "#444" : "#eed9b7",
          },
          "#shopify-section-template a": {
            color: theme.palette.mode === "dark" ? "#faf3e0" : "#a67c52",
            "&:hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "#555" : "#d4b996",
            },
          },
        })}
      />
      <div className="container">
        <main id="main">
          <CssBaseline />
          <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
          <Container>
            <Outlet />
          </Container>
          <p>Select an option from the header to get started.</p>

          <section id="shopify-section-template">
            <Typography variant="h2">Shopify Section Template</Typography>
            <a href="#placeholder1">Placeholder Link 1</a>
            <a href="#placeholder2">Placeholder Link 2</a>
            <a href="#placeholder3">Placeholder Link 3</a>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
