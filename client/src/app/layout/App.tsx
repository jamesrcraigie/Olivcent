import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  GlobalStyles,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./styles.css";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 10,
        description: "product",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: Product[]) => setProducts(data))
      .catch((error) =>
        console.error("There was a problem fetching products:", error)
      );
  }, []);

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
            backgroundColor:
              theme.palette.mode === "dark" ? "#333" : "#a67c52",
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
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <header id="header">
          <div className="header-nav">
            <a href="#products">Products</a>
            <a href="#orders">Orders</a>
            <a href="#customers">Customers</a>
            <a href="#about">About</a>
            <a href="#settings">Settings</a>
          </div>
        </header>
        <main id="main">
          <section>
            <h2>Welcome to Olivcent</h2>
            <p>Select an option from the header to get started.</p>
          </section>
          <section id="products-section">
            <>
              <Container>
                <Catalog products={products} addProduct={addProduct} />
              </Container>
            </>
          </section>
          <section id="shopify-section-template">
            <h2>Shopify Section Template</h2>
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
