import { Grid } from "@mui/material";
import Product from "./Product/Product";

const Products = ({ products }) => {
  const myProducts = products.map((product) => (
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Product product={product} />
    </Grid>
  ));

  return (
    <main>
      <Grid mt={8} container justifyContent="center" spacing={4}>
        {myProducts}
      </Grid>
    </main>
  );
};

export default Products;
