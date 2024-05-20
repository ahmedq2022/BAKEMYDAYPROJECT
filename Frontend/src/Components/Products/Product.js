import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import Productcard from "./Productcard";
import { API_BASE_URL } from "../../config";
import axios from "axios";
import Contact from "../Footer/Footer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Navbar from "../Navbar/Home";

const Product = () => {
  const [cakes, setcakes] = useState([]);
  const [price, setprice] = React.useState("");
  const [category, setcategory] = useState("");

  const handleChange = event => {
    setprice(event.target.value);
  };

  const getAllCakes = () => {
    axios.get(API_BASE_URL + "getCakes/").then(res => {
      setcakes(res.data);
    });
  };
  useEffect(() => {
    getAllCakes();
  }, []);
  return (
    <Box
      sx={{
        //background: "#ffffff"
        background: "#F1BDB0"
      }}
    >
      <Navbar />
      <Carousel />
      <br />
      <br />
      <Typography variant="h4" sx={{ textAlign: "center", color: "black" }}>
        Our Menu
      </Typography>
      <br />
      <Container>
        <Stack spacing={4}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <FormControl sx={{ m: 1, width: "50%" }} size="small">
              <InputLabel id="demo-select-small-label">
                Sort By Price
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={price}
                label="Sort"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="1000">Under 1000</MenuItem>
                <MenuItem value="500-1000">Between 500 to 1000</MenuItem>
                <MenuItem value="100-500">Between 100 to 500</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: "50%" }} size="small">
              <InputLabel id="demo-select-small-label">
                Sort By Category
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={category}
                label="Filter"
                onChange={e => setcategory(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Cakes">Cakes</MenuItem>
                <MenuItem value="Pastry">Pastry</MenuItem>
                <MenuItem value="Donuts">Donuts</MenuItem>
                <MenuItem value="Cupcakes">Cupcakes</MenuItem>
              </Select>
            </FormControl>
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
            {cakes
              .filter(val => {
                if (price == "100-500") {
                  if (val.price >= 100 && val.price <= 500) {
                    return val;
                  }
                } else if (price == "500-1000") {
                  if (val.price >= 500 && val.price <= 1000) {
                    return val;
                  }
                } else if (category == "Cakes") {
                  if (val.category == "Cakes") {
                    return val;
                  }
                } else if (category == "Pastry") {
                  if (val.category == "Pastry") {
                    return val;
                  }
                } else if (category == "Donuts") {
                  if (val.category == "Donuts") {
                    return val;
                  }
                } else if (category == "Cupcakes") {
                  if (val.category == "Cupcakes") {
                    return val;
                  }
                } else {
                  return val;
                }
              })
              .map((e, index) => {
                return (
                  <Productcard
                    id={index + 1}
                    cakeName={e.cakeName}
                    image={e.image}
                    price={e.price}
                    description={e.description}
                    item={e}
                  />
                );
              })}
          </Box>
        </Stack>
      </Container>
      <br />
      <br />
      <Contact />
    </Box>
  );
};

export default Product;
