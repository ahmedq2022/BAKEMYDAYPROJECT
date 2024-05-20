import { Box, Button, Container, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import { API_BASE_URL } from "../../../config";
import axios from "axios";
import Adminnavbar from "../../Navbar/Admin";
import { useNavigate } from "react-router-dom";

const Productlist = () => {
  const [cakes, setcakes] = useState([]);
  const [searchText, setsearchText] = useState("");
  const navigate = useNavigate();

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
        //background: "#fff",
        background: "#F1BDB0",
        paddingBottom: "150px"
      }}
    >
      <Adminnavbar />
      <Container>
        <Stack spacing={4} sx={{ p: 3 }}>
          <Button
            variant="contained"
            sx={{
              background: "black",
              color: "#fff",
              ":hover": { background: "green" }
            }}
            onClick={() => navigate("/addproduct")}
          >
            + Add Cake
          </Button>
          <TextField
            id="outlined-size-small"
            placeholder="Search By Cake Name..."
            size="small"
            value={searchText}
            onChange={e => setsearchText(e.target.value)}
            sx={{ borderColor: "black" }}
            name="description"
          />
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
                if (
                  val.cakeName
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  val.cakeName.toUpperCase().includes(searchText.toUpperCase())
                ) {
                  return val;
                }
              })
              .map((e, index) => {
                return (
                  <Productcard
                    id={e._id}
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
    </Box>
  );
};

export default Productlist;
