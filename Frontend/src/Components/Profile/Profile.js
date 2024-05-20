import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Video from "../../Assets/Videos/background.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Contact from "../Footer/Footer";
import Navbar from "../Navbar/Home";
import TextField from "@mui/material/TextField";

const Profile = () => {
  const user = useSelector(state => state.user.value);
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
  const navigate = useNavigate();
  // useEffect(() => {
  //   var video = document.getElementById("video");
  //   video.play();
  // }, []);
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
          MY PROFILE
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
          onClick={() => navigate("/updateprofile")}
        >
          Update Profile
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "black",
            color: "#ffffff",
            ":hover": { background: "green" }
          }}
          onClick={() => navigate("/my-orders")}
        >
          My Orders
        </Button>
      </Box>

      <Contact />
    </Box>
  );
};

export default Profile;
