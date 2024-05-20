import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { useSelector } from "react-redux";
import OrderCard from "./orderCard";
import Usernavbar from "../Navbar/User";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Home";

export const Myorders = props => {
  const [data, setdata] = useState([]);
  const user = useSelector(state => state.user.value);
  const getMyOrders = () => {
    axios
      .get(API_BASE_URL + "getMyOrders/", {
        params: {
          email: user.email
        }
      })
      .then(res => {
        setdata(res.data);
      })
      .catch(err => alert(err));
  };
  useEffect(() => {
    getMyOrders();
  }, []);

  return (
    <Stack
      spacing={4}
      sx={{
        //background: "#ffffff",
        background: "#F1BDB0",
        paddingBottom: "0px"
      }}
    >
      <Navbar />
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: "black" }}>
          YOUR ORDERS{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "12px",
          alignItems: "flex-start"
        }}
      >
        {data.map(e => {
          return (
            <OrderCard
              image={e.image}
              cakeName={e.cakeName}
              price={e.amount}
              quantity={e.quantity}
              type={e.type}
              orderDate={e.currentDate}
              orderStatus={e.orderStatus}
            />
          );
        })}
      </Box>
      <br />
      <br />
      <Footer />
    </Stack>
  );
};
