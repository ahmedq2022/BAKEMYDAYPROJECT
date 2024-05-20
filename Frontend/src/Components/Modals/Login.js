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
import LoginBg from "../../Assets/Images/login.jpg";
import Signup from "./Signup";
import Adminlogin from "./AdminLogin";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#ffffff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  background: `url(
                "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              )`,
  backgroundSize: "cover"
};

const Login = ({ loginState }) => {
  const [open, setOpen] = React.useState(false);
  const [signupState, setsignupState] = useState(false);
  const [adminState, setadminState] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkState = () => {
    if (loginState) setOpen(true);
    console.log(loginState);
  };
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: ""
  });
  const handleChange = e => {
    setloginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  const loginUser = e => {
    e.preventDefault();
    if (loginDetails.email == "" || loginDetails.password == "") {
      alert("please fill all fields");
    } else {
      axios
        .get(API_BASE_URL + "userlogin/", { params: loginDetails })
        .then(res => {
          try {
            if (res.data.auth) {
              localStorage.setItem("token", res.data.token);
              console.log(res.data.result[0]);
              dispatch(
                getUserData({
                  id: res.data.result[0].id,
                  username: res.data.result[0].username,
                  email: res.data.result[0].email,
                  password: res.data.result[0].password,
                  address: res.data.result[0].address,
                  mobile: res.data.result[0].mobile
                })
              );
              navigate("/home-screen");
            }
          } catch (error) {
            alert(error);
          }
        });
    }
  };

  useEffect(
    () => {
      checkState();
      // var video = document.getElementById("video");
      // video.play();
    },
    [loginState]
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
              flexDirection: "column"
            }
            // gap: "15px"
            }
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              LOGIN
            </Typography>
            <br />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <TextField
                label="Email"
                id="outlined-size-small"
                size="small"
                value={loginDetails.email}
                onChange={handleChange}
                sx={{ borderColor: "white" }}
                name="email"
              />
              <br />
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
            <br />
            <Button
              variant="contained"
              sx={{
                background: "black",
                color: "#ffffff",
                ":hover": { background: "green" }
              }}
              onClick={loginUser}
            >
              Login
            </Button>
            <Typography variant="h6">OR</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                background: "black",
                color: "#ffffff",
                ":hover": { background: "green" }
              }}
              onClick={() => {
                setOpen(false);
                setadminState(!adminState);
              }}
            >
              Login As Admin
            </Button>
            <Typography variant="h6">OR</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                background: "black",
                color: "#ffffff",
                ":hover": { background: "green" }
              }}
              onClick={() => {
                setOpen(false);
                setsignupState(!signupState);
              }}
            >
              Create Account
            </Button>
          </Box>
        </Box>
      </Modal>
      {signupState ? <Signup signupState={signupState} /> : ""}
      {adminState ? <Adminlogin adminState={adminState} /> : ""}
    </Box>
  );
};

export default Login;
