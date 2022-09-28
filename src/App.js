import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Products, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

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
      .then((updatedCart) => setCart(updatedCart));
  };

  const handleEmptyCart = async () => {
    await commerce.cart.empty().then((updatedCart) => setCart(updatedCart));
  };

  const refreshCart = async () =>  {
    const newCart = await commerce.cart.refresh()
    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
      setOrder(incomingOrder)
      refreshCart()
    } catch(error) {
        setErrorMessage(error.data.error.message)
    }
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
        <Route path="/checkout" element={<Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>} />
      </Routes>
    </div>
  );
};

export default App;
