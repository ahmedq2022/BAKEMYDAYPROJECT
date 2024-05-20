import { Box } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../Assets/Icons/main logo.png";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Login from "../Modals/Login";
import HomeIcon from "@mui/icons-material/Home";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useCart } from "react-use-cart";
const useStyles = makeStyles({
  customLink: {
    textDecoration: "none",
    color: "#ffffff",
    "&:hover": { color: "red" }
  },
  customBox: {
    // margin: "30px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 2,
    background: "rgba(0, 0, 0, 1.608)"
    // background: "#ffffff"
  }
});
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid pink`,
    padding: "0 4px"
  }
}));
const Usernavbar = () => {
  const classes = useStyles();
  const [loginState, setloginState] = useState(false);
  const navigate = useNavigate();
  const { totalUniqueItems } = useCart();
  return (
    <Box className={classes.customBox}>
      <Box component="img" src={Logo} sx={{ height: "75px" }} />
      <Box sx={{ display: "flex", gap: "30px" }}>
        <Link className={classes.customLink} to="/">
          HOME
        </Link>
        <Link className={classes.customLink} to="/about">
          ABOUT US
        </Link>
        <Link className={classes.customLink} to="/menu">
          MENU
        </Link>
        <Link className={classes.customLink}>CUSTOM ORDER</Link>
        <Link className={classes.customLink} to="/contact">
          CONTACT US
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: "15px" }}>
        <HomeIcon
          fontSize="large"
          sx={{ color: "#333333" }}
          onClick={() => navigate("/home-screen")}
        />
        <PersonIcon
          fontSize="large"
          sx={{ color: "#333333" }}
          onClick={() => navigate("/profile")}
        />
        <StyledBadge badgeContent={totalUniqueItems} color="secondary">
          <ShoppingCartIcon
            fontSize="large"
            sx={{ color: "#333333" }}
            onClick={() => navigate("/cart-page")}
          />
        </StyledBadge>
        <LogoutIcon
          fontSize="large"
          sx={{ color: "#333333" }}
          onClick={() => {
            navigate("/");
          }}
        />
      </Box>
      {loginState ? <Login loginState={loginState} /> : ""}
    </Box>
  );
};

export default Usernavbar;
