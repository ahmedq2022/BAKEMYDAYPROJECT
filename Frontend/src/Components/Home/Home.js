import React, { useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Navbar from "../Navbar/Home";
import { makeStyles } from "@mui/styles";
import Video from "../../Assets/Videos/background.mp4";
import Story from "../Story/Story";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Product from "../Products/Product";
import Menu from "../Menu/Menu";
import Visitus from "./visit_us";
import Content from "./Content";

const useStyles = makeStyles({
  customStack: {
    paddingInline: "10px"
  },
  customMarquee: {
    color: "red",
    "&:hover": {
      color: "red"
    },
    fontSize: "80px"
  }
});
const Home = () => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
    var video = document.getElementById("video");
    video.play();
  }, []);
  return (
    <Box>
      <Navbar />

      <Stack spacing={5} className={classes.customStack}>
        <Box
          sx={{
            textAlign: "center",
            paddingBlock: "250px",
            width: "100%",
            position: "relative"
          }}
          id="section-1"
        >
          <video
            style={{
              width: "100%",
              height: "100%",
              zIndex: -1,
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0
            }}
            src={Video}
            loop
            muted
            id="video"
            type="video/mp4"
          />
          <Typography
            variant="h1"
            style={{
              textShadow: "-3px -3px #FF0000",
              fontFamily: "Raleway,sans-serif",
              fontWeight: "800"
            }}
          >
            Welcome To Bake My Day
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Raleway,sans-serif",
              fontWeight: "800",
              background: "black",
              width: "fit-content",
              margin: "auto"
            }}
          >
            Where Sweet Days Come To Life
          </Typography>
        </Box>
        <Box
          sx={{
            display: "inline-block",
            paddingBlock: "100px",
            position: "relative",
            top: "10px",
            paddingBlock: "170px"
          }}
        >
          <marquee className={classes.customMarquee}>
            NEW OFFERS IS COMING SOON
          </marquee>
        </Box>
        <Container />
        <Content />
        <Visitus />
        <Footer />
      </Stack>
    </Box>
  );
};

export default Home;
