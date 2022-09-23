import { ImportExport } from "@mui/icons-material";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import styles from "./styles";

const CartItem = ({ item, decreaseQuantity, increaseQuantity }) => {
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
          <Button onClick={() => decreaseQuantity(item.id, {quantity: item.quantity - 1})} type="button" size="small">
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button onClick={() => increaseQuantity(item.id, {quantity: item.quantity + 1})} type="button" size="small">
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
