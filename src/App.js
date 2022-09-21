import { useState, useEffect } from "react";
import { NavBar, Products } from "./components";
import { commerce } from "./lib/commerce";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <Products products={products} />
    </div>
  );
};

export default App;
