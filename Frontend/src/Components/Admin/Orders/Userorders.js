import { Box, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../config";
import { useSelector } from "react-redux";
import Userordercard from "./Userordercard";
import Adminnavbar from "../../Navbar/Admin";

export const Userorders = props => {
  const [data, setdata] = useState([]);
  const user = useSelector(state => state.user.value);
  const getMyOrders = () => {
    axios
      .get(API_BASE_URL + "getallorders/")
      .then(res => {
        setdata(res.data);
      })
      .catch(err => alert(err));
  };
  useEffect(() => {
    getMyOrders();
  }, []);

  return (
    <Stack spacing={4} sx={{ background: "#F1BDB0", paddingBottom: "150px" }}>
      <Adminnavbar />{" "}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ color: "black" }}>
          USER ORDERS{" "}
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
            <Userordercard
              id={e._id}
              image={e.image}
              cakeName={e.cakeName}
              price={e.amount}
              quantity={e.quantity}
              weight={e.weight}
              flavour={e.flavour}
              basecolour={e.basecolour}
              bordercolour={e.bordercolour}
              borderdesign={e.borderdesign}
              caketext={e.caketext}
              type={e.type}
              orderDate={e.currentDate}
              orderStatus={e.orderStatus}
              username={e.username}
              email={e.email}
            />
          );
        })}
      </Box>
    </Stack>
  );
};
