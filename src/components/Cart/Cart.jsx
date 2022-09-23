import { Container, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CardItem from "./CartItem/CartItem";
import styles from "./styles";

const Cart = ({ myCart, decreaseQuantity, increaseQuantity, removeItem }) => {
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link style={styles.link} to="/">
        {" "}
        start adding some!
      </Link>
    </Typography>
  );

  if (!myCart.line_items) return "...Loading";

  const cartItems = myCart.line_items.map((item) => (
    <Grid item key={item.id} xs={12} sm={4}>
      <CardItem
        removeItem={removeItem}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        item={item}
      />
    </Grid>
  ));

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cartItems}
      </Grid>
      <div style={styles.cardDetails}>
        <Typography variant="h4">
          Subtotal: {myCart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            styles={styles.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            style={styles.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container mt={8}>
      <div style={styles.toolbar} />
      <Typography gutterBottom sylte={styles.title} variant="h3">
        Your Shooping Cart
      </Typography>
      {!myCart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
