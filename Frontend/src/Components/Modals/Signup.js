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

const Signup = ({ signupState }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkState = () => {
    if (signupState) setOpen(true);
    console.log(signupState);
  };
  const [signupDetails, setsignupDetails] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    mobile: ""
  });
  const handleChange = e => {
    setsignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };
  const createUser = e => {
    e.preventDefault();
    if (
      signupDetails.username == "" ||
      signupDetails.email == "" ||
      signupDetails.password == "" ||
      signupDetails.address == "" ||
      signupDetails.mobile == ""
    ) {
      alert("please fill all details");
    } else {
      axios.post(API_BASE_URL + "createaccount", signupDetails).then(res => {
        if (res.data.status == 200) {
          alert(res.data.message);
        }
      });
    }
  };

  useEffect(
    () => {
      checkState();
    },
    [signupState]
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
              SIGNUP
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <TextField
                label="Username"
                id="outlined-size-small"
                size="small"
                value={signupDetails.username}
                onChange={handleChange}
                sx={{ borderColor: "white" }}
                name="username"
              />
              <TextField
                label="Email"
                id="outlined-size-small"
                size="small"
                value={signupDetails.email}
                onChange={handleChange}
                sx={{ borderColor: "white" }}
                name="email"
              />
              <TextField
                label="Password"
                id="outlined-size-small"
                size="small"
                value={signupDetails.password}
                onChange={handleChange}
                name="password"
                type="password"
              />
              <TextField
                label="Address"
                id="outlined-size-small"
                size="small"
                value={signupDetails.address}
                onChange={handleChange}
                sx={{ borderColor: "white" }}
                name="address"
              />
              <TextField
                label="Mobile"
                id="outlined-size-small"
                size="small"
                value={signupDetails.mobile}
                onChange={handleChange}
                sx={{ borderColor: "white" }}
                name="mobile"
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
              Signup
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Signup;
