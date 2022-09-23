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
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CartItem;
