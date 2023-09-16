import React, { useEffect, useState } from "react";
import "./index.css";
import { Product } from "./product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        name: "product" + (prevState.length + 1),
        price: prevState.length * 10,
        description: "product" + (prevState.length + 1),
        pictureUrl:
          "http://picsum.photos/200" + (prevState.length + 1) + ".png",
        type: "product" + (prevState.length + 1),
        quantityInStock: 10,
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

  return (
    <div className="container">
      <div className="title-header">
        <h1>Olivcent</h1>
      </div>
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
          <h2>Welcome to Olivcent Dashboard</h2>
          <p>Select an option from the header to get started.</p>
        </section>
        <section id="products-section">
          <h2>Products</h2>
          <button onClick={addProduct}>Add Product</button>
          <ul className="product-list">
            {products.map((product) => (
              <li key={product.id}>
                <img src="http://picsum.photos/160" alt={product.name} />
                <span className="product-name">{product.name}</span> -
                <span className="product-price">£{product.price}</span>
              </li>
            ))}
          </ul>
        </section>
        <section id="shopify-section-template">
          <h2>Shopify Section Template</h2>
          <a href="#placeholder1">Placeholder Link 1</a>
          <a href="#placeholder2">Placeholder Link 2</a>
          <a href="#placeholder3">Placeholder Link 3</a>
        </section>
      </main>
    </div>
  );
}

export default App;
