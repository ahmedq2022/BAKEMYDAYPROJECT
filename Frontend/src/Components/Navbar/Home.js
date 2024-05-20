import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../Assets/Icons/main logo.png";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Login from "../Modals/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useCart } from "react-use-cart";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../Reducers/User";
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
  }
});
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: '2px solid pink',
    padding: "0 4px"
  }
}));
const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginState, setloginState] = useState(false);
  const { totalUniqueItems } = useCart();
  const user = useSelector(state => state.user.value);

  return (
    <Link to="/">

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
        <Link className={classes.customLink} to="/customorder">
          CUSTOM ORDER
        </Link>
        <Link className={classes.customLink} to="/contact">
          CONTACT US
        </Link>
      </Box>
      <Box sx={{ display: "flex", gap: "15px" }}>
        <PersonIcon
          fontSize="large"
          sx={{ color: "#ffffff" }}
          onClick={() => {
            user.id != "" ? navigate("/profile") : setloginState(!loginState);
          }}
        />
        {user.id == ""
          ? <Typography variant="h6" sx={{ color: "#fff", pr: 1 }} onClick={() => {
            user.id != "" ? navigate("/profile") : setloginState(!loginState);
          }}>
              LOGIN / SIGNUP
            </Typography>
          : ""}
        {user.id !== "" ? (
  <StyledBadge badgeContent={totalUniqueItems} color="secondary">
    <ShoppingCartIcon
      fontSize="large"
      sx={{ color: "#ffffff" }}
      onClick={(e) => {
        e.preventDefault();
        navigate("/cart-page");
      }}
    />
  </StyledBadge>
) : null}

        {user.id != ""
          ? <LogoutIcon
              fontSize="large"
              sx={{ color: "#ffffff" }}
              onClick={() => {
                localStorage.clear();
                dispatch(
                  getUserData({
                    id: "",
                    username: "",
                    email: "",
                    password: "",
                    address: "",
                    mobile: ""
                  })
                );
                navigate("/");
              }}
            />
          : ""}
      </Box>
      {loginState ? <Login loginState={loginState} /> : ""}
    </Box>
 </Link>

  );
};

export default Navbar;