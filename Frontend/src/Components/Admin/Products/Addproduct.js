import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { API_BASE_URL } from "../../../config";
import Adminnavbar from "../../Navbar/Admin";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Addproduct = ({ signupState }) => {
  const navigate = useNavigate();
  const [cakeDetails, setcakeDetails] = useState({
    cakeName: "",
    image: "",
    price: "",
    description: "",
    category: ""
  });
  const handleChange = e => {
    setcakeDetails({ ...cakeDetails, [e.target.name]: e.target.value });
  };
  const createUser = e => {
    e.preventDefault();
    if (
      cakeDetails.cakeName == "" ||
      cakeDetails.image == "" ||
      cakeDetails.price == "" ||
      cakeDetails.description == "" ||
      cakeDetails.category == ""
    ) {
      alert("please fill all details");
    } else {
      axios.post(API_BASE_URL + "addproduct", cakeDetails).then(res => {
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
          ADD CAKE
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <TextField
            label="cakename"
            id="outlined-size-small"
            size="small"
            value={cakeDetails.cakeName}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="cakeName"
          />
          <TextField
            label="image"
            id="outlined-size-small"
            size="small"
            value={cakeDetails.image}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="image"
          />
          <TextField
            label="price"
            id="outlined-size-small"
            size="small"
            value={cakeDetails.price}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="price"
          />
          <TextField
            label="description"
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
            color: "#fff",
            ":hover": { background: "green" }
          }}
          onClick={createUser}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default Addproduct;
