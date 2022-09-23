import { useState, useEffect } from "react";
import { NavBar, Products } from "./components";
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
      .then((response) => setCart(response));
  };

  console.log(cart);

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <NavBar totalItems={cart.total_items} />
      <Products onAddToCart={handleAddToCart} products={products} />
    </div>
  );
};

export default App;
