import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import styles from "./styles";

const CartItem = ({ item }) => {
  return (
    <Card>
      <CardMedia image={item.image.url} alt={item.name} style={styles.media} />
      <CardContent style={styles.cardContent}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h6">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions style={styles.cardActions}>
        <div style={styles.buttons}>
          <Button type="button" size="small">
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small">
            +
          </Button>
        </div>
        <Button type="button" variant="contained" color="secondary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
