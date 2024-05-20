import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { API_BASE_URL } from "../../../config";
import Adminnavbar from "../../Navbar/Admin";
import { useNavigate } from "react-router-dom";

const Adduser = ({ signupState }) => {
  const navigate = useNavigate();
  const [userDetails, setuserDetails] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    mobile: ""
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
      axios.post(API_BASE_URL + "createaccount", userDetails).then(res => {
        if (res.data.status == 200) {
          alert(res.data.message);
          navigate("/viewusers");
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
          ADD USER
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <TextField
            label="username"
            id="outlined-size-small"
            size="small"
            value={userDetails.username}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="username"
          />
          <TextField
            label="email"
            id="outlined-size-small"
            size="small"
            value={userDetails.email}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="email"
          />
          <TextField
            label="password"
            id="outlined-size-small"
            size="small"
            value={userDetails.password}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="password"
            type="password"
          />
          <TextField
            label="address"
            id="outlined-size-small"
            size="small"
            value={userDetails.address}
            onChange={handleChange}
            sx={{ borderColor: "black" }}
            name="address"
          />
          <TextField
            label="mobile"
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

export default Adduser;
