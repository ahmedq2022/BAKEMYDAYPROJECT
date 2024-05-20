import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../../config";
import Contact from "../Footer/Footer";
import Navbar from "../Navbar/Home";

const Updateprofile = ({ signupState }) => {
  const user = useSelector(state => state.user.value);
  console.log(user);
  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState({
    id: user.id,
    username: user.username,
    email: user.email,
    password: user.password,
    address: user.address,
    mobile: user.mobile
  });
  const handleChange = e => {
    setuserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const createUser = e => {
    e.preventDefault();
    if (
      userDetails.username == "" ||
      userDetails.email == "" ||
      userDetails.password == "" ||
      userDetails.address == "" ||
      userDetails.mobile == ""
    ) {
      alert("please fill all details");
    } else {
      axios.put(API_BASE_URL + "updateuser", userDetails).then(res => {
        if (res.data.status == 200) {
          alert(res.data.message);
          navigate("/profile");
        }
      });
    }
  };

  return (
    <Box
      sx={{
        //background: "#ffffff"
        background: "#F1BDB0"
      }}
    >
      <Navbar />
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          height: "90vh",
          paddingInline: "100px",
          marginTop: "50px"
        }}
      >
        <Typography variant="h4" sx={{ color: "black" }}>
          UPDATE PROFILE
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <TextField
            id="outlined-size-small"
            size="small"
            value={userDetails.username}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="username"
          />
          <TextField
            id="outlined-size-small"
            size="small"
            value={userDetails.email}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="email"
          />
          <TextField
            id="outlined-size-small"
            size="small"
            value={userDetails.password}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="password"
            type="password"
          />
          <TextField
            id="outlined-size-small"
            size="small"
            value={userDetails.address}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="address"
          />
          <TextField
            id="outlined-size-small"
            size="small"
            value={userDetails.mobile}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="mobile"
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            background: "black",
            color: "#ffffff",
            ":hover": { background: "green" }
          }}
          onClick={createUser}
        >
          Save
        </Button>
      </Box>

      <Contact />
    </Box>
  );
};

export default Updateprofile;
