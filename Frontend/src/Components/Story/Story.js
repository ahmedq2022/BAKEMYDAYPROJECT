import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import img1 from "../../Assets/Images/1.jpg";
import img2 from "../../Assets/Images/2.jpg";

const Story = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingBlock: "200px"
      }}
      id="section-2"
    >
      <Box
        component="img"
        src={img1}
        sx={{
          height: "220px",
          width: "220px",
          borderRadius: "20px",
          objectFit: "cover"
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          maxWidth: "50%"
        }}
      >
        <Typography variant="h2">OUR STORY</Typography>
        <Typography variant="h6" sx={{ mt: 1 }}>
          Welcome to Bake My Day, where every day is filled with the aroma of
          freshly baked delights and the joy of creating sweet memories. We are
          more than just a bakery; we are a haven for all lovers of delectable
          treats and exquisite flavors.
        </Typography>
      </Box>
      <Box
        component="img"
        src={img2}
        sx={{
          height: "220px",
          width: "220px",
          borderRadius: "20px",
          objectFit: "cover"
        }}
      />
    </Box>
  );
};

export default Story;
