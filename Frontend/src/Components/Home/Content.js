import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Introimg from "../../Assets/Images/one.jpg";

const Content = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center", // background: "#F9F6ED",
        background: "#F1BDB0",
        paddingBlock: "100px"
      }
      // paddingInline: "120px"
      }
    >
      <Stack sx={{ width: "30%" }} spacing={2}>
        <Typography sx={{ fontSize: "44px", color: "black" }}>
          INTRODUCTION
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#2A2A2A",
            lineHeight: "26px",
            paddingBottom: "25px"
          }}
        >
          Indulge your senses at our online haven for sweet cravings! At Bake My
          Day, each bite is pure bliss, and celebrations are sweeter with our
          exquisite cakes, cupcakes, pastries, and donuts. Our passion for
          baking reflects in every treat – from special occasions to sweet
          moments, our virtual shelves offer a tempting array to elevate your
          taste buds. Explore our artful collection where tradition meets
          innovation. From decadent chocolate cakes to joy-sparking cupcakes,
          each creation is a masterpiece, baked to perfection with the finest
          ingredients. Join us in celebrating life's sweet moments confidently,
          as each Bake My Day creation is crafted with love and a commitment to
          exceed your expectations. Order seamlessly from our easy-to-use online
          store, bringing the bakery to your doorstep in just a few clicks.
          Thank you for choosing Bake My Day as your pastry paradise. Let's make
          every day a little sweeter together!
        </Typography>
        <Button
          variant="contained"
          sx={{ background: "black", color: "#fff", width: "fit-content" }}
          onClick={() => navigate("/menu")}
        >
          SHOP ONLINE
        </Button>
      </Stack>
      <Box sx={{ width: "auto" }}>
        <Box
          component="img"
          src={
            Introimg // src="//www.magnoliabakery.com/cdn/shop/files/custom_resized_5ca7d053-1f66-455b-a77d-4115d570cf4f_1280x.jpg?v=1632848075"
          }
          sx={{ width: "500px", height: "500px" }}
        />
      </Box>
    </Box>
  );
};

export default Content;
