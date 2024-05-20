import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        background: "#fff",
        width: "fit-content",
        paddingBlock: "60px",
        paddingInline: "50px",
        margin: "auto"
      }}
      spacing={5}
    >
      <div style={{ margin: "auto" }}>
        <CheckCircleOutlineIcon sx={{ fontSize: "50px" }} />
      </div>
      <Stack spacing={1}>
        <Typography variant="h5" sx={{ color: "black", textAlign: "center" }}>
          Thank you for ordering !
        </Typography>
        <Typography variant="h6" sx={{ color: "grey", textAlign: "center" }}>
          visit us again soon !
        </Typography>
      </Stack>
      <Box sx={{ display: "flex", gap: "13px", justifyContent: "center" }}>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            border: "1px solid black",
            borderRadius: "0px"
          }}
          onClick={() => {
            navigate("/my-orders");
          }}
        >
          VIEW ORDERS
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "black", color: "white", borderRadius: "0px" }}
          onClick={() => navigate("/menu")}
        >
          CONTINUE SHOPPING
        </Button>
      </Box>
    </Stack>
  );
};

export default Success;
