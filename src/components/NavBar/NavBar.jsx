import { AppBar, Toolbar, IconButton, Badge, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles";
import logo from "../../assets/logo.png";

const NavBar = ({ totalItems }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <AppBar position="fixed" style={styles.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            style={styles.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="commerce js"
              heigth="80px"
              width="80px"
              style={styles.image}
            />
            My commerce
          </Typography>
          <div style={styles.grow} />
          {pathname === "/" && (
            <div style={styles.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
