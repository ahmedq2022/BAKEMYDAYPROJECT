import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { API_BASE_URL } from "../../../config";
import { useSelector } from "react-redux";
import Adminnavbar from "../../Navbar/Admin";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Updateproduct = ({ signupState }) => {
  const product = useSelector(state => state.cake.value);
  const navigate = useNavigate();
  const [cakeDetails, setcakeDetails] = useState({
    id: product.id,
    cakename: product.name,
    image: product.image,
    price: product.price,
    description: product.description,
    category: product.category
  });
  const handleChange = e => {
    setcakeDetails({ ...cakeDetails, [e.target.name]: e.target.value });
  };
  const createUser = e => {
    e.preventDefault();
    if (
      cakeDetails.cakename == "" ||
      cakeDetails.image == "" ||
      cakeDetails.price == "" ||
      cakeDetails.description == "" ||
      cakeDetails.category == ""
    ) {
      alert("please fill all details");
    } else {
      axios.put(API_BASE_URL + "updateproduct", cakeDetails).then(res => {
        if (res.data.status == 200) {
          alert(res.data.message);
          navigate("/adminhome");
        }
      });
    }
  };

  return (
    <Box sx={{ background: "#F1BDB0" }}>
      <Adminnavbar />
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          height: "100vh",
          paddingInline: "100px",
          marginTop: "50px"
        }}
      >
        <Typography variant="h4" sx={{ color: "black" }}>
          UPDATE CAKE
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <TextField
            id="outlined-size-small"
            size="small"
            value={cakeDetails.cakename}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="cakename"
          />
          <TextField
            id="outlined-size-small"
            size="small"
            value={cakeDetails.image}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="image"
          />
          <TextField
            id="outlined-size-small"
            size="small"
            value={cakeDetails.price}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="price"
          />
          <TextField
            id="outlined-size-small"
            size="small"
            value={cakeDetails.description}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="description"
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <FormControl
              sx={{ m: 0, width: "100%", border: "2px solid black" }}
              size="small"
            >
              <InputLabel id="demo-select-small-label">
                Select Category
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Category"
                value={cakeDetails.category}
                onChange={handleChange}
                name="category"
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
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            background: "black",
            color: "white",
            ":hover": { background: "green" }
          }}
          onClick={createUser}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Updateproduct;
