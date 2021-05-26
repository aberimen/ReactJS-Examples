import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

const App = () => {

  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    const newCart = [...cart];
    newCart.push({ product, quantity: 1 });
    setCart(newCart);
  }

  const updateCart = (cartItem, newQuantity) => {
    let newCart = [...cart];

    if (newQuantity < 1) { // ürün mıktarı birden küçükse ürünü sepetten sil
      newCart = newCart.filter(c => c.product.id !== cartItem.product.id);

    } else {
      const newCartItem = newCart.find(c => c.product.id === cartItem.product.id);
      newCartItem.quantity = newQuantity;
    }
    setCart(newCart);
  }

  return (
    <div className="App">
      <Navbar cart={cart} />
      <ProductsGrid
        products={products}
        cart={cart}
        updateCart={updateCart}
        addToCart={addCart}
      />
    </div>
  );

}

export default App;
