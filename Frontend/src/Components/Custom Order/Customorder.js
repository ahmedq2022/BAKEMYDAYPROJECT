import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config";
import axios from "axios";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Home";
import Customcard from "./Customcard";

const Customdesign = () => {
  const [cakes, setcakes] = useState([]);

  const getAllCakes = () => {
    axios.get(API_BASE_URL + "getCakes/").then(res => {
      console.log(res.data)
      setcakes(res.data);
    });
  };
  useEffect(() => {
    getAllCakes();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        //background: "#ffffff",
        background: "#F1BDB0",
        // paddingBlock: "100px",
        marginTop: "auto"
      }}
      id="section-3"
    >
      <Navbar />

      <Box
        sx={{
          padding: "55px",
          background: `url(
            "https://sachascakes.com/cdn/shop/collections/1280x1280_Square_category_Post_2022_Picture_Cake_1950x.png?v=1662974275"
          )`
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Edible Picture Cake
        </Typography>
      </Box>
      <br />
      <br />
      <Typography variant="h4" sx={{ textAlign: "center", color: "black" }}>
        Custom Design
      </Typography>
      <br />
      <Container>
        <Stack spacing={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "flex-start"
            }}
          >
            {cakes
              // .filter(val => {
              //   if (val.category == "customcakes") {
              //     return val;
              //   }
              // })
              .map((e, index) => {
                return (
                  <Customcard
            
                    id={index + 1}
                    cakeName={e.cakeName}
                    image={e.image}
                    price={e.price}
                    description={e.description}
                    category={e.category}
                    item={e}
                  />
                );
              })}
          </Box>
        </Stack>
      </Container>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Customdesign;
