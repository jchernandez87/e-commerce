import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import styles from "./styles";

const Product = ({ product, onAddToCart }) => {
  return (
    <Card style={styles.root}>
      <CardMedia
        style={styles.media}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div styles={styles.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing style={styles.cardActions}>
        <IconButton
          onClick={() => onAddToCart(product.id, 1)}
          aria-label="Add to Cart"
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
