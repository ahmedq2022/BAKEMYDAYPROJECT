import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import two from "../../Assets/Images/two.jpg";
import three from "../../Assets/Images/three.jpg";
import four from "../../Assets/Images/four.jpg";
import five from "../../Assets/Images/five.jpg";

const Visitus = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "0px" }}>
      <Box sx={{ width: "50%" }}>
        <Box
          sx={{
            backgroundImage: `url(${two})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            paddingBlock: "100px"
          }}
        >
          <Stack
            spacing={3}
            sx={{
              width: "300px",
              height: "280px",
              borderRadius: "200px",
              padding: "40px",
              background: "#F1BDB0",
              textAlign: "center",
              margin: "auto"
            } // background: "#fff",
            }
          >
            <Typography variant="h5" sx={{ color: "black", pt: 6 }}>
              ABOUT
            </Typography>
            <Typography sx={{ color: "black", fontSize: "15px" }}>
              Where each treat is a crafted masterpiece delivered to your
              doorstep, infusing joy into every bite.
            </Typography>
            <div>
              <Button
                variant="contained"
                sx={{
                  background: "black",
                  color: "#fff",
                  width: "fit-content"
                }}
                onClick={() => navigate("/about")}
              >
                READ OUR STORY
              </Button>
            </div>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Box
          sx={{
            backgroundImage: `url(${three})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            paddingBlock: "100px"
          }}
        >
          <Stack
            spacing={3}
            sx={{
              width: "300px",
              height: "280px",
              borderRadius: "200px",
              padding: "40px",
              background: "#F1BDB0",
              textAlign: "center",
              margin: "auto"
            } // background: "#fff",
            }
          >
            <Typography variant="h5" sx={{ color: "black", pt: 6 }}>
              CUSTOM ORDER
            </Typography>
            <Typography sx={{ color: "black", fontSize: "15px" }}>
              Discover a world of sweet possibilities with our custom orders,
              where we turn your unique visions into delectable reality!
            </Typography>
            <div>
              <Button
                variant="contained"
                sx={{
                  background: "black",
                  color: "#fff",
                  width: "fit-content"
                }}
                onClick={() => navigate("/customorder")}
              >
                LEARN MORE
              </Button>
            </div>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Box
          sx={{
            backgroundImage: `url(${four})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            paddingBlock: "100px"
          }}
        >
          <Stack
            spacing={3}
            sx={{
              width: "300px",
              height: "280px",
              borderRadius: "200px",
              padding: "40px",
              background: "#F1BDB0",
              textAlign: "center",
              margin: "auto"
            } // background: "#fff",
            }
          >
            <Typography variant="h5" sx={{ color: "black", pt: 7 }}>
              ORDER ONLINE
            </Typography>
            <Typography sx={{ color: "black", fontSize: "15px" }}>
              Experience the ease of sweetness with our online ordering!
            </Typography>
            <div>
              <Button
                variant="contained"
                sx={{
                  background: "black",
                  color: "#fff",
                  width: "fit-content"
                }}
                onClick={() => navigate("/menu")}
              >
                SHOP NOW
              </Button>
            </div>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Box
          sx={{
            backgroundImage: `url(${five})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            paddingBlock: "100px"
          }}
        >
          <Stack
            spacing={3}
            sx={{
              width: "300px",
              height: "280px",
              borderRadius: "200px",
              padding: "40px",
              background: "#F1BDB0",
              textAlign: "center",
              margin: "auto"
            } // background: "#fff",
            }
          >
            <Typography variant="h5" sx={{ color: "black", pt: 6 }}>
              CONTACT US
            </Typography>
            <Typography sx={{ color: "black", fontSize: "15px" }}>
              Connect with the sweetness you crave through our Contact Us page,
              where we're ready to listen and turn your inquiries into
              delightful conversations!
            </Typography>
            <div>
              <Button
                variant="contained"
                sx={{
                  background: "black",
                  color: "#fff",
                  width: "fit-content"
                }}
                onClick={() => navigate("/contact")}
              >
                LEARN MORE
              </Button>
            </div>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Visitus;
