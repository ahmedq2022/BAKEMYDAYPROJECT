import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar/Home";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <Stack id="section-2">
      <Navbar />
      <Box sx={{ background: "#F1BDB0", paddingBlock: "80px" }}>
        <Typography variant="h4" sx={{ color: "black", textAlign: "center" }}>
          About Us
        </Typography>
      </Box>
      <Divider sx={{ borderWidth: "2px" }} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "100px",
          alignItems: "center",
          background: "#F1BDB0"
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Box
            component="img"
            src="//www.magnoliabakery.com/cdn/shop/files/custom_resized_5ca7d053-1f66-455b-a77d-4115d570cf4f_1280x.jpg?v=1632848075"
            sx={{ width: "100%" }}
          />
        </Box>

        <Stack sx={{ width: "30%" }} spacing={2}>
          <Typography sx={{ fontSize: "44px", color: "black" }}>
            Our Story
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#2A2A2A",
              lineHeight: "26px",
              paddingBottom: "25px"
            }}
          >
            Bake My Day began as a dream – a dream to spread happiness through
            the art of baking. Our journey started in Lahore, where a team of
            passionate bakers came together with a shared vision: to craft
            confections that not only tantalize the taste buds but also leave an
            indelible mark on your heart.
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "black", color: "#fff", width: "fit-content" }}
            onClick={() => navigate("/about")}
          >
            LEARN MORE
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#F1BDB0"
        } // background: "#F9F6ED"
        }
      >
        <Stack sx={{ width: "30%", pl: 25 }} spacing={2}>
          <Typography sx={{ fontSize: "44px", color: "black" }}>
            Our Journey
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#2A2A2A",
              lineHeight: "26px",
              paddingBottom: "25px"
            }}
          >
            Bake My Day began as a dream – a dream to spread happiness through
            the art of baking. Our journey started in [Your City], where a team
            of passionate bakers came together with a shared vision: to craft
            confections that not only tantalize the taste buds but also leave an
            indelible mark on your heart.
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "black", color: "#fff", width: "fit-content" }}
            onClick={() => navigate("/about")}
          >
            LEARN MORE
          </Button>
        </Stack>
        <Box sx={{ width: "50%" }}>
          <Box
            component="img"
            src="//www.magnoliabakery.com/cdn/shop/files/UWS__219_1280x.jpg?v=1632437892"
            sx={{ width: "100%" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "100px",
          alignItems: "center",
          background: "#F1BDB0"
        } // background: "#F9F6ED"
        }
      >
        <Box sx={{ width: "50%" }}>
          <Box
            component="img"
            src="//www.magnoliabakery.com/cdn/shop/files/custom_resized_5ca7d053-1f66-455b-a77d-4115d570cf4f_1280x.jpg?v=1632848075"
            sx={{ width: "100%" }}
          />
        </Box>

        <Stack sx={{ width: "30%" }} spacing={2}>
          <Typography sx={{ fontSize: "44px", color: "black" }}>
            The Art of Baking
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#2A2A2A",
              lineHeight: "26px",
              paddingBottom: "25px"
            }}
          >
            At Bake My Day, baking is not merely a science; it's an art form.
            Each recipe is a carefully composed symphony of ingredients, each
            step a dance of precision and creativity. From the handpicked cocoa
            for our chocolates to the locally sourced fruits that grace our
            pastries, we believe in the power of quality ingredients to elevate
            every bite.
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "black", color: "#fff", width: "fit-content" }}
            onClick={() => navigate("/about")}
          >
            LEARN MORE
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#F1BDB0"
        } // background: "#F9F6ED"
        }
      >
        <Stack sx={{ width: "30%", pl: 25 }} spacing={2}>
          <Typography sx={{ fontSize: "44px", color: "black" }}>
            Meet the Team
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#2A2A2A",
              lineHeight: "26px",
              paddingBottom: "25px"
            }}
          >
            Behind every delectable creation at Bake My Day is a team of
            dedicated individuals who share a love for baking. From our skilled
            pastry chefs to our friendly customer service team, each member
            plays a crucial role in bringing the Bake My Day experience to life.
            Get to know the faces behind the aprons and discover the stories
            that fuel our creativity.
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "black", color: "#fff", width: "fit-content" }}
            onClick={() => navigate("/about")}
          >
            LEARN MORE
          </Button>
        </Stack>
        <Box sx={{ width: "50%" }}>
          <Box
            component="img"
            src="//www.magnoliabakery.com/cdn/shop/files/UWS__219_1280x.jpg?v=1632437892"
            sx={{ width: "100%" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "100px",
          alignItems: "center",
          background: "#F1BDB0"
        } // background: "#F9F6ED"
        }
      >
        <Box sx={{ width: "50%" }}>
          <Box
            component="img"
            src="//www.magnoliabakery.com/cdn/shop/files/custom_resized_5ca7d053-1f66-455b-a77d-4115d570cf4f_1280x.jpg?v=1632848075"
            sx={{ width: "100%" }}
          />
        </Box>

        <Stack sx={{ width: "30%" }} spacing={2}>
          <Typography sx={{ fontSize: "44px", color: "black" }}>
            Our Commitment
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#2A2A2A",
              lineHeight: "26px",
              paddingBottom: "25px"
            }}
          >
            We take pride in the smiles we've inspired and the celebrations
            we've been a part of. Our commitment is simple yet profound – to
            deliver not just cakes and pastries but moments of sheer delight. We
            strive for excellence in every detail, from the intricate
            decorations on our cupcakes to the fluffy perfection of our donuts.
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "black", color: "#fff", width: "fit-content" }}
            onClick={() => navigate("/about")}
          >
            LEARN MORE
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center", // background: "#F9F6ED"
          background: "#F1BDB0"
        }}
      >
        <Stack sx={{ width: "30%", pl: 25 }} spacing={2}>
          <Typography sx={{ fontSize: "44px", color: "black" }}>
            Join Us in Celebration
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#2A2A2A",
              lineHeight: "26px",
              paddingBottom: "25px"
            }}
          >
            Bake My Day is more than a bakery; it's a community of sweet
            enthusiasts. Join us in celebrating life's special moments – big or
            small. As we continue to grow, our commitment to quality,
            innovation, and, above all, your satisfaction remains unwavering.
            Thank you for being a part of our journey. Together, let's savor the
            sweetness of life, one delectable treat at a time.
          </Typography>
          <Button
            variant="contained"
            sx={{ background: "black", color: "#fff", width: "fit-content" }}
            onClick={() => navigate("/about")}
          >
            LEARN MORE
          </Button>
        </Stack>
        <Box sx={{ width: "50%" }}>
          <Box
            component="img"
            src="//www.magnoliabakery.com/cdn/shop/files/custom_resized_5ca7d053-1f66-455b-a77d-4115d570cf4f_1280x.jpg?v=1632848075"
            sx={{ width: "100%" }}
          />
        </Box>
      </Box>

      <Footer />
    </Stack>
  );
};

export default About;
