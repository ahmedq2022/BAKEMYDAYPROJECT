import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { ItemCard } from "./itemCard";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { useSelector } from "react-redux";
import Contact from "../Footer/Footer";
import Navbar from "../Navbar/Home";
import Success from "./success";

const Cartpage = () => {
  const { isEmpty, totalUniqueItems, cartTotal, emptyCart, items } = useCart();
  const [successstate, setsuccessstate] = useState(false);
  const user = useSelector(state => state.user.value);
  const placeOrder = e => {
    var currentDate = new Date().toISOString().slice(0, 10);
    for (var i = 0; i < items.length; i++) {
      console.log(items[i]);
      if (items[i].type == "custom") {
        localStorage.setItem(currentDate, items[i].image);
      }
      axios
        .post(API_BASE_URL + "placeOrder", {
          username: user.username,
          email: user.email,
          address: user.address,
          mobile: user.mobile,
          cakeName: items[i].cakeName,
          image: items[i].image,
          quantity: items[i].quantity,
          amount: cartTotal,
          weight: items[i].weight,
          flavour: items[i].flavour,
          basecolour: items[i].basecolour,
          bordercolour: items[i].bordercolour,
          borderdesign: items[i].borderdesign,
          caketext: items[i].caketext,
          type: items[i].type,
          currentDate: currentDate,
          orderStatus: "pending"
        })
        .then(res => {
          if (res.data.status == 200) {
            setsuccessstate(true);
            emptyCart();
          }
        })
        .catch(err => alert(err));
    }
  };
  return (
    <Box
      sx={{
        //background: "#ffffff",
        background: "#F1BDB0"
      }}
    >
      <Navbar />
      <br />
      {successstate
        ? <Success />
        : isEmpty
          ? <Box
              sx={{
                textAlign: "center",
                height: items.length == 0 ? "20vh" : "0vh"
              }}
            >
              <Typography variant="h4" sx={{ color: "black" }}>
                YOUR CART IS EMPTY
              </Typography>
            </Box>
          : <Box sx={{ textAlign: "center", pb: 3 }}>
              <Typography variant="h4" sx={{ color: "black" }}>
                YOUR CART{" "}
              </Typography>
            </Box>}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "12px",
          alignItems: "flex-start"
        }}
      >
        {items.map((e, index) => {
          return (
            <ItemCard
              id={e.id}
              quantity={e.quantity}
              cakeName={e.cakeName}
              price={e.price}
              description={e.description}
              image={e.image}
              weight={e.weight}
              flavour={e.flavour}
              basecolour={e.basecolour}
              bordercolour={e.bordercolour}
              borderdesign={e.borderdesign}
              caketext={e.caketext}
              type={e.type}
            />
          );
        })}
      </Box>
      <Stack spacing={3} sx={{ textAlign: "right", p: 3 }}>
        <Typography variant="h5" sx={{ color: "black" }}>
          {" "}Total Items : {totalUniqueItems}
        </Typography>
        <Typography variant="h5" sx={{ color: "black" }}>
          {" "}Cart Total : $ {cartTotal}
        </Typography>
        <Box sx={{ display: "flex", gap: "10px", justifyContent: "end" }}>
          <Button
            variant="contained"
            onClick={() => emptyCart()}
            sx={{
              background: "black",
              color: "white",
              ":hover": { background: "green" }
            }}
          >
            Clear Cart
          </Button>
          <Button
            variant="contained"
            onClick={() => placeOrder()}
            sx={{
              background: "black",
              color: "white",
              ":hover": { background: "green" }
            }}
          >
            Checkout
          </Button>
        </Box>
      </Stack>
      <Contact />
    </Box>
  );
};

export default Cartpage;
