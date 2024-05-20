import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../config";
import axios from "axios";
import Adminnavbar from "../../Navbar/Admin";
import { useNavigate } from "react-router-dom";
import Usercard from "./Usercard";

const Userlist = () => {
  const [users, setusers] = useState([]);
  const navigate = useNavigate();

  const getAllusers = () => {
    axios.get(API_BASE_URL + "getusers/").then(res => {
      setusers(res.data);
    });
  };
  useEffect(() => {
    getAllusers();
  }, []);
  return (
    <Box sx={{ background: "#F1BDB0" }}>
      <Adminnavbar />
      <Container sx={{ paddingBottom: "150px" }}>
        <Stack spacing={4} sx={{ p: 3 }}>
          <Button
            variant="contained"
            sx={{
              background: "black",
              color: "#fff",
              ":hover": { background: "green" }
            }}
            onClick={() => navigate("/adduser")}
          >
            + Add Users
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "flex-start"
            }}
          >
            {users.map((e, index) => {
              return (
                <Usercard
                  key={index}
                  id={e._id}
                  username={e.username}
                  email={e.email}
                  password={e.password}
                  address={e.address}
                  mobile={e.mobile}
                />
              );
            })}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Userlist;
