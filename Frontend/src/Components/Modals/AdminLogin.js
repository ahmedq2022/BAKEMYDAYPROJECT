import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { API_BASE_URL } from "../../config";
import { useDispatch } from "react-redux";
import { getUserData } from "../../Reducers/User";
import { useNavigate } from "react-router-dom";
import Video from "../../Assets/Videos/background.mp4";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#749BC2",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  background: `url(
                "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              )`,
  backgroundSize: "cover"
};

const Adminlogin = ({ adminState }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkState = () => {
    if (adminState) setOpen(true);
    console.log(adminState);
  };
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: ""
  });
  const handleChange = e => {
    setloginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  const createUser = e => {
    e.preventDefault();
    if (loginDetails.email == "" || loginDetails.password == "") {
      alert("please fill all details");
    } else if (
      loginDetails.email == "admin@gmail.com" &&
      loginDetails.password == "admin"
    ) {
      navigate("/dashboard");
    } else {
      alert("invalid username or password");
    }
  };

  useEffect(
    () => {
      checkState();
    },
    [adminState]
  );

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "15px"
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              ADMIN LOGIN
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <TextField
                label="Email"
                id="outlined-size-small"
                size="small"
                value={loginDetails.email}
                onChange={handleChange}
                sx={{ borderColor: "white" }}
                name="email"
              />
              <TextField
                label="Password"
                id="outlined-size-small"
                size="small"
                value={loginDetails.password}
                onChange={handleChange}
                name="password"
                type="password"
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{
                background: "black",
                color: "#ffffff",
                ":hover": { background: "green" }
              }}
              onClick={createUser}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Adminlogin;
