import { Grid } from "@mui/material";
import Product from "./Product/Product";

const Products = () => {
  const products = [
    {
      id: "1",
      name: "Shoes",
      description: "running shoes",
      price: "15.0",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/d44fa06fc83f4644b7e8acbc01160e1b_9366/NMD_R1_Primeblue_Shoes_Black_GZ9258_01_standard.jpg",
    },
    {
      id: "2",
      name: "Macbook",
      description: "Macbook air",
      price: "10.0",
      image: "https://cdn.ipadizate.com/2021/11/nuevo-MacBook-pro.jpg",
    },
  ];

  const myProducts = products.map((product) => (
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Product product={product} />
    </Grid>
  ));

  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {myProducts}
      </Grid>
    </main>
  );
};

export default Products;
