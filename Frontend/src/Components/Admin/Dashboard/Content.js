import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Recentorders from "./recentorders";
import axios from "axios";
import { API_BASE_URL } from "../../../config";
import "./progress.css";

const Content = () => {
  const [users, setusers] = useState([]);
  const [data, setdata] = useState([]);
  const [prodorders, setprodorders] = useState([]);
  const [completedorders, setcompletedorders] = useState([]);
  const getAllusers = () => {
    axios.get(API_BASE_URL + "getusers/").then(res => {
      setusers(res.data);
    });
  };

  const getOrdersInProduction = () => {
    axios
      .get(API_BASE_URL + "getordersusingstatus/", {
        params: {
          status: "pending"
        }
      })
      .then(res => {
        setprodorders(res.data);
      })
      .catch(err => alert(err));
  };

  const getOrdersCompleted = () => {
    axios
      .get(API_BASE_URL + "getordersusingstatus/", {
        params: {
          status: "delivered"
        }
      })
      .then(res => {
        setcompletedorders(res.data);
      })
      .catch(err => alert(err));
  };

  const getMyOrders = () => {
    axios
      .get(API_BASE_URL + "getallorderswithoutstatus/")
      .then(res => {
        setdata(res.data);
      })
      .catch(err => alert(err));
  };

  useEffect(() => {
    getAllusers();
    getMyOrders();
    getOrdersInProduction();
    getOrdersCompleted();
  }, []);
  var totalOrders = data.length / 100 * 100 + ",100";
  var prodOrdercount = prodorders.length + ",100";
  var completedOrdercount = completedorders.length + ",100";

  return (
    <Container sx={{ paddingBlock: "30px" }}>
      <Stack direction={"column"} spacing={4} sx={{ mt: 2 }}>
        <Box>
          <Typography
            variant="h5"
            sx={{ color: "black", fontFamily: "fantasy", letterSpacing: "1px" }}
          >
            Analytics
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "space-between",
              mt: 2
            }}
          >
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 5,
                width: "27%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", width: "70%" }}
              >
                <Typography
                  sx={{ color: "black", fontSize: "16px", fontWeight: 900 }}
                >
                  Total Orders
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                    fontFamily: "fantasy",
                    letterSpacing: "2px"
                  }}
                >
                  {data.length}
                </Typography>
              </Box>
              <Box sx={{ width: "30%" }}>
                <div class="single-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart green">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle"
                      stroke-dasharray={totalOrders}
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      {data.length} %
                    </text>
                  </svg>
                </div>
              </Box>
            </Paper>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 5,
                width: "27%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ color: "black", fontSize: "16px", fontWeight: 900 }}
                >
                  Orders in Production
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                    fontFamily: "fantasy",
                    letterSpacing: "2px"
                  }}
                >
                  {prodorders.length}
                </Typography>
              </Box>
              <Box sx={{ width: "30%" }}>
                <div class="single-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart pink">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle"
                      stroke-dasharray={prodOrdercount}
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      {prodorders.length} %
                    </text>
                  </svg>
                </div>
              </Box>
            </Paper>
            <Paper
              elevation={2}
              sx={{
                p: 4,
                borderRadius: 5,
                width: "25%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ color: "black", fontSize: "16px", fontWeight: 900 }}
                >
                  Orders Completed
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                    fontFamily: "fantasy",
                    letterSpacing: "2px"
                  }}
                >
                  {completedorders.length}
                </Typography>
              </Box>
              <Box sx={{ width: "30%" }}>
                <div class="single-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart blue">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle"
                      stroke-dasharray={completedOrdercount}
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      {completedorders.length} %
                    </text>
                  </svg>
                </div>
              </Box>
            </Paper>
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography
            variant="h5"
            sx={{ color: "black", fontFamily: "fantasy", letterSpacing: "1px" }}
          >
            New Users
          </Typography>
          <Box
            sx={{ display: "flex", gap: "10px", flexWrap: "wrap", mt: 2 } // justifyContent: "space-between",
            }
          >
            {users.length == 0
              ? <Typography variant="h5">No Users Present !</Typography>
              : users.map((e, index) => {
                  return (
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        borderRadius: 5,
                        width: "20%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <Box
                        component="img"
                        src="https://cdn-icons-png.flaticon.com/512/8742/8742495.png"
                        sx={{ width: "70px" }}
                      />
                      <Typography
                        sx={{
                          color: "black",
                          fontSize: "16px",
                          fontWeight: 900,
                          mt: 1
                        }}
                      >
                        {e.username}
                      </Typography>
                    </Paper>
                  );
                })}
            {/* <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 5,
                width: "20%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/8742/8742495.png"
                sx={{ width: "70px" }}
              />
              <Typography
                sx={{
                  color: "black",
                  fontSize: "16px",
                  fontWeight: 900,
                  mt: 1
                }}
              >
                Ahmed
              </Typography>
            </Paper>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 5,
                width: "20%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/8742/8742495.png"
                sx={{ width: "70px" }}
              />
              <Typography
                sx={{
                  color: "black",
                  fontSize: "16px",
                  fontWeight: 900,
                  mt: 1
                }}
              >
                John
              </Typography>
            </Paper>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 5,
                width: "20%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Box
                component="img"
                src="https://cdn-icons-png.flaticon.com/512/8742/8742495.png"
                sx={{ width: "70px" }}
              />
              <Typography
                sx={{
                  color: "black",
                  fontSize: "16px",
                  fontWeight: 900,
                  mt: 1
                }}
              >
                Mike
              </Typography>
            </Paper> */}
          </Box>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography
            variant="h5"
            sx={{ color: "black", fontFamily: "fantasy", letterSpacing: "1px" }}
          >
            Recent Orders
          </Typography>
          <Recentorders />
        </Box>
      </Stack>
    </Container>
  );
};

export default Content;
