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

  const handleAddToCart = async (productId, quantity) => {
    await commerce.cart
      .add(productId, quantity)
      .then((updatedCart) => setCart(updatedCart));
  };

  const handleUpdateQuantity = async (productId, productQuantity) => {
    await commerce.cart
      .update(productId, productQuantity)
      .then((updatedCart) => setCart(updatedCart));
  };

  const handleRemoveItem = async (productId) => {
    await commerce.cart
    .remove(productId)
    .then(updatedCart => setCart(updatedCart))
  }
  
  const handleEmptyCart = async () => {
    await commerce.cart
    .empty()
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
              emptyCart={handleEmptyCart}
              removeItem={handleRemoveItem}
              updateQuantity={handleUpdateQuantity}
              myCart={cart}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
