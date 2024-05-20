import { Box } from "@mui/material";
import React, { useState } from "react";
import Logo from "../../Assets/Icons/main logo.png";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import CakeIcon from "@mui/icons-material/Cake";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
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
const Adminnavbar = () => {
  const classes = useStyles();
  const [loginState, setloginState] = useState(false);
  const navigate = useNavigate();
  const { totalUniqueItems } = useCart();
  return (
    <Box className={classes.customBox}>
      <Box component="img" src={Logo} sx={{ height: "75px" }} />
      <Box sx={{ display: "flex", gap: "30px" }} />
      <Box sx={{ display: "flex", gap: "12px" }}>
        <HomeIcon
          fontSize="large"
          sx={{ color: "#ffffff" }}
          onClick={() => navigate("/dashboard")}
        />
        <CakeIcon
          fontSize="large"
          sx={{ color: "#ffffff" }}
          onClick={() => navigate("/adminhome")}
        />
        <PersonIcon
          fontSize="large"
          sx={{ color: "#ffffff" }}
          onClick={() => navigate("/viewusers")}
        />
        <StoreIcon
          fontSize="large"
          sx={{ color: "#ffffff" }}
          onClick={() => navigate("/userorders")}
        />

        <LogoutIcon
          fontSize="large"
          sx={{ color: "#ffffff" }}
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        />
      </Box>
      {loginState ? <Login loginState={loginState} /> : ""}
    </Box>
  );
};

export default Adminnavbar;
