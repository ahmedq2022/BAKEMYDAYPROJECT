import { Box } from "@mui/material";
import React from "react";
import Adminnavbar from "../../Navbar/Admin";
import Content from "./Content";

const Dashboard = () => {
  return (
    <Box sx={{ background: "#fff" }}>
      <Adminnavbar />
      <Content />
    </Box>
  );
};

export default Dashboard;
