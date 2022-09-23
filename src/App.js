import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Products, Cart } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = (productId, quantity) => {
    commerce.cart
      .add(productId, quantity)
      .then((updatedCart) => setCart(updatedCart));
  };

  const handleDecreaseQuantity = (productId, productQuantity) => {
    commerce.cart
      .update(productId, productQuantity)
      .then((updatedCart) => setCart(updatedCart));
  };

  const handleIncreaseQuantity = (productId, productQuantity) => {
    commerce.cart
      .update(productId, productQuantity)
      .then((updatedCart) => setCart(updatedCart));
  };

  const handleRemoveItem = (productId) => {
    commerce.cart
    .remove(productId)
    .then(updatedCart => setCart(updatedCart))
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <NavBar totalItems={cart.total_items} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Products onAddToCart={handleAddToCart} products={products} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              removeItem={handleRemoveItem}
              increaseQuantity={handleIncreaseQuantity}
              decreaseQuantity={handleDecreaseQuantity}
              myCart={cart}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
