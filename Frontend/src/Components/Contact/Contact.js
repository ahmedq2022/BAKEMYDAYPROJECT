import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  TextareaAutosize,
  Typography
} from "@mui/material";
import React, { useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Navbar from "../Navbar/Home";
import Footer from "../Footer/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Navbar />
      <Box sx={{ background: "#F1BDB0", paddingBlock: "80px" }}>
        <Typography variant="h4" sx={{ color: "black", textAlign: "center" }}>
          Contact Us
        </Typography>
      </Box>
      <Divider sx={{ borderWidth: "2px" }} />
      <Stack
        sx={{
          background: "#F1BDB0",
          paddingBlock: "100px",
          paddingInline: "60px"
        }}
        direction={"column"}
        spacing={5}
        id="section-5"
      >
        <Typography variant="h4" sx={{ color: "black", textAlign: "center" }}>
          WE VALUE YOUR FEEDBACK
        </Typography>

        <Stack spacing={2}>
          <Typography variant="h6" sx={{ color: "black" }}>
            Please complete the following form and help us improve.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              justifyContent: "flex-start"
            }}
          >
            <TextField
              label="Full Name"
              id="outlined-size-small"
              sx={{ borderColor: "black", width: "50%" }}
              name="username"
            />
            <TextField
              label="Phone number"
              id="outlined-size-small"
              sx={{ borderColor: "black", width: "48%" }}
              name="username"
            />
          </Box>
          <TextField
            label="Email"
            id="outlined-size-small"
            sx={{ borderColor: "black", width: "50%" }}
            name="username"
          />

          <TextareaAutosize
            placeholder="Message"
            id="outlined-size-small"
            sx={{ borderColor: "black", backgroundColor: "black" }}
            name="username"
            minRows={5}
          />
          <Button
            variant="contained"
            sx={{
              width: "fit-content",
              background: "black",
              color: "#fff"
            }}
          >
            SUBMIT
          </Button>
        </Stack>
        <Stack spacing={5}>
          <Typography
            variant="h4"
            sx={{ color: "black", textAlign: "center", pb: 4 }}
          >
            Mailing Address
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            <Stack
              direction={"column"}
              spacing={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "33.33%"
              }}
            >
              <LocationOnIcon sx={{ color: "#FF0406" }} />
              <Typography sx={{ color: "black", fontSize: "16px" }}>
                Our Location
              </Typography>
              <Typography sx={{ color: "grey", fontSize: "14px" }}>
                Pakistan, Lahore
              </Typography>
            </Stack>
            <Stack
              direction={"column"}
              spacing={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "33.33%"
              }}
            >
              <LocalPhoneIcon sx={{ color: "#FF0406" }} />
              <Typography sx={{ color: "black", fontSize: "16px" }}>
                Phone No
              </Typography>
              <Typography sx={{ color: "grey", fontSize: "14px" }}>
                +92-300-4805000
              </Typography>
            </Stack>
            <Stack
              direction={"column"}
              spacing={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "33.33%"
              }}
            >
              <EmailIcon sx={{ color: "#FF0406" }} />
              <Typography sx={{ color: "black", fontSize: "16px" }}>
                Email Us
              </Typography>
              <Typography sx={{ color: "grey", fontSize: "14px" }}>
                bmd@gmail.com
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
      <Footer />
    </Box>
  );
};

export default Contact;
