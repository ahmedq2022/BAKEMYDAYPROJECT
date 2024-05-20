import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Toolbar from "@mui/material/Toolbar";
import { Box, Grid } from "@mui/material";
import Mob1 from "../../Assets/Images/carouselone.jpg";
import Mob2 from "../../Assets/Images/carouseltwo.jpg";
import Mob3 from "../../Assets/Images/carouselthree.jpg";
import Mob4 from "../../Assets/Images/carouselfour.jpg";
import Mob5 from "../../Assets/Images/carouselfive.jpg";

const options = {
  margin: 0,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: true,
  loop: true,
  autoplaySpeed: 250,
  navText: ["<KeyboardArrowLeftIcon/>", "<KeyboardArrowLeftIcon />"],
  responsive: {
    0: {
      items: 2,
      slideBy: 1
    },
    400: {
      items: 2,
      slideBy: 1
    },
    600: {
      items: 2,
      slideBy: 1
    },
    700: {
      items: 3,
      slideBy: 1
    },
    1000: {
      items: 1,
      slideBy: 1
    }
  }
};

const Carousel = () => {
  return (
    <Grid>
      {/* <Toolbar /> */}
      <OwlCarousel className="owl-theme" items={5} {...options} sx={{ p: 3 }}>
        <Box className="item">
          {/* <img src="https://pbs.twimg.com/media/Dv5v0NJXcAI6pE_.jpg" style={{ width: "380px", height: "250px" }} alt="" className="carouselImage" /> */}
          <img src={Mob1} alt="" className="carouselImage" />
        </Box>
        <Box className="item">
          <img
            src={
              Mob2 // src="https://www.cakezone.com/themes/organie1/img/general-img/offers/cake20-off.jpg"
            }
            alt=""
            className="carouselImage"
          />{" "}
        </Box>
        <Box className="item">
          <img // src="https://pbs.twimg.com/media/Dv5v0NJXcAI6pE_.jpg"
            src={Mob3}
            alt=""
            className="carouselImage"
          />
        </Box>
        <Box className="item">
          <img
            // src="https://www.cakezone.com/themes/organie1/img/general-img/offers/cake20-off.jpg"
            src={Mob4}
            alt=""
            className="carouselImage"
          />
        </Box>
        <Box className="item">
          <img src={Mob5} alt="" className="carouselImage" />
        </Box>
        {/*  <Box className="item">
          <img
            src="https://www.cakezone.com/themes/organie1/img/general-img/offers/cake20-off.jpg"
            alt=""
            className="carouselImage"
            style={{ width: "380px", height: "250px" }}
          />
        </Box>
        <Box className="item">
          <img
            src="https://pbs.twimg.com/media/Dv5v0NJXcAI6pE_.jpg"
            alt=""
            className="carouselImage"
            style={{ width: "380px", height: "250px" }}
          />
        </Box> */}
        {/* <Box className="item">
          <img
            src="https://www.cakezone.com/themes/organie1/img/general-img/offers/cake20-off.jpg"
            alt=""
            className="carouselImage"
            style={{ width: "380px", height: "250px" }}
          />
        </Box> */}
      </OwlCarousel>
    </Grid>
  );
};

export default Carousel;
