import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Navbar from "../Navbar/Home";
import { useCart } from "react-use-cart";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1
});
const Customdetails = props => {
  const cake = useSelector(state => state.cake.value);
  const { addItem } = useCart();
  const [weight, setweight] = useState("");
  const [flavour, setflavour] = useState("");
  const [basecolour, setbasecolour] = useState("");
  const [bordercolour, setbordercolour] = useState("");
  const [borderdesign, setborderdesign] = useState("");
  const [caketext, setcaketext] = useState("");
  const [weightstateone, setweightstateone] = useState(false);
  const [weightstatetwo, setweightstatetwo] = useState(false);
  const [flavouronestate, setflavouronestate] = useState(false);
  const [flavourtwostate, setflavouetwostate] = useState(false);
  const [flavourthreestate, setflavourthreestate] = useState(false);
  const [flavourfourstate, setflavourfourstate] = useState(false);
  const [flavourfivestate, setflavourfivestate] = useState(false);
  const [basecolouronestate, setbasecolouronestate] = useState(false);
  const [basecolourtwostate, setbasecolourtwostate] = useState(false);
  const [basecolourthreestate, setbasecolourthreestate] = useState(false);
  const [basecolourfourstate, setbasecolourfourstate] = useState(false);
  const [basecolourfivestate, setbasecolourfivestate] = useState(false);
  const [bordercolouronestate, setbordercolouronestate] = useState(false);
  const [bordercolourtwostate, setbordercolourtwostate] = useState(false);
  const [bordercolourthreestate, setbordercolourthreestate] = useState(false);
  const [bordercolourfourstate, setbordercolourfourstate] = useState(false);
  const [bordercolourfivestate, setbordercolourfivestate] = useState(false);
  const [designonestate, setdesignonestate] = useState(false);
  const [designtwostate, setdesigntwostate] = useState(false);
  const [image, setimage] = useState(null);
  return (
    <Box
      sx={{
        //background: "white"
        background: "#F1BDB0"
      }}
    >
      <Navbar />
      <Box
        sx={{
          padding: "55px",
          background: `url(
            "https://sachascakes.com/cdn/shop/collections/1280x1280_Square_category_Post_2022_Picture_Cake_1950x.png?v=1662974275"
          )`
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Edible Picture Cake
        </Typography>
      </Box>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          pt: 7,
          paddingBottom: "250px",
          justifyContent: "space-between",
          alignItems: "flex-start"
        }}
      >
        <Box sx={{ width: "550px", height: "350px" }}>
          <Box
            component="img"
            src={cake.image}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "14px",
              border: "3px solid black"
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <Typography variant="h5" sx={{ color: "black",p:1, fontWeight: "bold", border:"2px solid black",mt:2,width:"fit-content" }}>
            {cake.cakename}
          </Typography>
          <Typography variant="h6" sx={{ color: "black" }}>
            Rs : {cake.price} /-
          </Typography>
          <Typography variant="h6" sx={{ color: "black" }}>
            {cake.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              mt: 1
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "black", textTransform: "capitalize" }}
            >
              Size : {weight}
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography
                sx={{
                  p: 1,
                  background: weightstateone ? "black" : "transparent",
                  color: weightstateone ? "#fff" : "black",
                  width: "fit-content",
                  borderRadius: "20px",
                  border: "2px dotted"
                }}
                onClick={() => {
                  setweightstatetwo(false);
                  setweightstateone(true);
                  setweight("2lbs");
                }}
              >
                2lbs
              </Typography>
              <Typography
                sx={{
                  p: 1,
                  background: weightstatetwo ? "black" : "transparent",
                  color: weightstatetwo ? "#fff" : "black",
                  width: "fit-content",
                  borderRadius: "20px",
                  border: "2px dotted"
                }}
                onClick={() => {
                  setweightstateone(false);
                  setweightstatetwo(true);
                  setweight("3lbs");
                }}
              >
                3lbs
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                mt: 1
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "black", textTransform: "capitalize" }}
              >
                Select flavour
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography
                sx={{
                  p: 1,
                  background: flavouronestate ? "black" : "transparent",
                  color: flavouronestate ? "#fff" : "black",
                  width: "fit-content",
                  borderRadius: "10px",
                  border: "2px dotted"
                }}
                onClick={() => {
                  setflavouetwostate(false);
                  setflavourthreestate(false);
                  setflavourfourstate(false);
                  setflavourfivestate(false);
                  setflavouronestate(true);
                  setflavour("Double Choclate");
                }}
              >
                Double Choclate
              </Typography>
              <Typography
                sx={{
                  border: "2px dotted",
                  p: 1,
                  background: flavourtwostate ? "black" : "transparent",
                  color: flavourtwostate ? "#fff" : "black",
                  width: "fit-content",
                  borderRadius: "10px"
                }}
                onClick={() => {
                  setflavouetwostate(true);
                  setflavourthreestate(false);
                  setflavourfourstate(false);
                  setflavourfivestate(false);
                  setflavouronestate(false);
                  setflavour("Belgian fudge");
                }}
              >
                Belgian fudge
              </Typography>
              <Typography
                sx={{
                  border: "2px dotted",
                  p: 1,
                  background: flavourthreestate ? "black" : "transparent",
                  color: flavourthreestate ? "#fff" : "black",
                  width: "fit-content",
                  borderRadius: "10px"
                }}
                onClick={() => {
                  setflavouetwostate(false);
                  setflavourthreestate(true);
                  setflavourfourstate(false);
                  setflavourfivestate(false);
                  setflavouronestate(false);
                  setflavour("Black Forest");
                }}
              >
                Black Forest
              </Typography>
              <Typography
                sx={{
                  border: "2px dotted",
                  p: 1,
                  background: flavourfourstate ? "black" : "transparent",
                  color: flavourfourstate ? "#fff" : "black",
                  width: "fit-content",
                  borderRadius: "10px"
                }}
                onClick={() => {
                  setflavouetwostate(false);
                  setflavourthreestate(false);
                  setflavourfourstate(true);
                  setflavourfivestate(false);
                  setflavouronestate(false);
                  setflavour("Pineapple");
                }}
              >
                Pineapple
              </Typography>
              <Typography
                sx={{
                  border: "2px dotted",
                  p: 1,
                  background: flavourfivestate ? "black" : "transparent",
                  color: flavourfivestate ? "#fff" : "black",
                  width: "fit-content",
                  borderRadius: "10px"
                }}
                onClick={() => {
                  setflavouetwostate(false);
                  setflavourthreestate(false);
                  setflavourfourstate(false);
                  setflavourfivestate(true);
                  setflavouronestate(false);
                  setflavour("Vanilla Crunch");
                }}
              >
                Vanilla Crunch
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography variant="h6" sx={{ color: "black" }}>
              Upload Picture
            </Typography>
            {/* <TextField
              type="file"
              id="image"
              size="small"
              placeholder="Pick Cake Image"
              onChange={e => setimage(e.target.files[0])}
            /> */}
            <Button
              component="label"
              variant="contained"
              sx={{ color: "white", backgroundColor: "black" }}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput
                type="file"
                onChange={e => setimage(e.target.files[0])}
              />
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              mt: 1
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              Select Base Colour
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box
                sx={{
                  p: 3,
                  background: "pink",
                  width: "fit-content",
                  border: basecolouronestate ? "3px solid black" : "none"
                }}
                onClick={() => {
                  setbasecolourfivestate(false);
                  setbasecolourfourstate(false);
                  setbasecolourthreestate(false);
                  setbasecolourtwostate(false);
                  setbasecolouronestate(true);
                  setbasecolour("pink");
                }}
              />
              <Box
                sx={{
                  p: 3,
                  background: "brown",
                  width: "fit-content",
                  border: basecolourtwostate ? "3px solid black" : "none"
                }}
                onClick={() => {
                  setbasecolourfivestate(false);
                  setbasecolourfourstate(false);
                  setbasecolourthreestate(false);
                  setbasecolourtwostate(true);
                  setbasecolouronestate(false);
                  setbasecolour("brown");
                }}
              />
              <Box
                sx={{
                  p: 3,
                  background: "lightblue",
                  width: "fit-content",
                  border: basecolourthreestate ? "3px solid black" : "none"
                }}
                onClick={() => {
                  setbasecolourfivestate(false);
                  setbasecolourfourstate(false);
                  setbasecolourthreestate(true);
                  setbasecolourtwostate(false);
                  setbasecolouronestate(false);
                  setbasecolour("lightblue");
                }}
              />
              <Box
                sx={{
                  p: 3,
                  background: "red",
                  width: "fit-content",
                  border: basecolourfourstate ? "3px solid black" : "none"
                }}
                onClick={() => {
                  setbasecolourfivestate(false);
                  setbasecolourfourstate(true);
                  setbasecolourthreestate(false);
                  setbasecolourtwostate(false);
                  setbasecolouronestate(false);
                  setbasecolour("red");
                }}
              />
              <Box
                sx={{
                  p: 3,
                  background: "green",
                  width: "fit-content",
                  border: basecolourfivestate ? "3px solid black" : "none"
                }}
                onClick={() => {
                  setbasecolourfivestate(true);
                  setbasecolourfourstate(false);
                  setbasecolourthreestate(false);
                  setbasecolourtwostate(false);
                  setbasecolouronestate(false);
                  setbasecolour("green");
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              mt: 1
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              Select Border Colour
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box
                sx={{
                  p: 3,
                  background: "pink",
                  width: "fit-content",
                  border: bordercolouronestate ? "3px solid black" : "none"
                }}
                onClick={() => {
                  setbordercolourfivestate(false);
                  setbordercolourfourstate(false);
                  setbordercolourthreestate(false);
                  setbordercolourtwostate(false);
                  setbordercolouronestate(true);
                  setbordercolour("pink");
                }}
              />
              <Box
                sx={{
                  p: 3,
                  background: "brown",
                  width: "fit-content",
                  border: bordercolourtwostate ? "3px solid black" : "none"
                }}
                onClick={() => {
                  setbordercolourfivestate(false);
                  setbordercolourfourstate(false);
                  setbordercolourthreestate(false);
                  setbordercolourtwostate(true);
                  setbordercolouronestate(false);
                  setbordercolour("brown");
                }}
              />
              <Box
                sx={{
                  p: 3,
                  background: "lightblue",
                  width: "fit-content",
                  border: bordercolourthreestate ? "3px solid black" : "none"
                }}
                onClick={() => {
                  setbordercolourfivestate(false);
                  setbordercolourfourstate(false);
                  setbordercolourthreestate(true);
                  setbordercolourtwostate(false);
                  setbordercolouronestate(false);
                  setbordercolour("lightblue");
                }}
              />
              <Box
                sx={{
                  p: 3,
                  background: "red",
                  width: "fit-content",
                  border: bordercolourfourstate ? "3px solid black" : "none"
                }}
                onClick={() => {
                  setbordercolourfivestate(false);
                  setbordercolourfourstate(true);
                  setbordercolourthreestate(false);
                  setbordercolourtwostate(false);
                  setbordercolouronestate(false);
                  setbordercolour("red");
                }}
              />
              <Box
                sx={{
                  p: 3,
                  background: "green",
                  width: "fit-content",
                  border: bordercolourfivestate ? "3px solid black" : "none"
                }}
                onClick={() => {
                  setbordercolourfivestate(true);
                  setbordercolourfourstate(false);
                  setbordercolourthreestate(false);
                  setbordercolourtwostate(false);
                  setbordercolouronestate(false);
                  setbordercolour("green");
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              Select Border Design
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box
                sx={{
                  background: `url("https://cdn.shopify.com/s/files/1/0658/0505/8279/files/Picture_Cake_Shapes_2022_SD_1.png?v=1665583327&width=200&height=200")`,
                  width: "100px",
                  height: "100px",
                  backgroundSize: "contain",
                  border: designonestate ? "2px solid black" : "none"
                }
                // width: "100%"
                }
                onClick={() => {
                  setdesignonestate(true);
                  setdesigntwostate(false);
                  setborderdesign("Simple Design");
                }}
              />
              <Box
                sx={{
                  background: `url("https://cdn.shopify.com/s/files/1/0658/0505/8279/files/Picture_Cake_Shapes_2022_SD_1.png?v=1665583327&width=200&height=200")`,
                  width: "100px",
                  height: "100px",
                  backgroundSize: "contain",
                  border: designtwostate ? "2px solid black" : "none"
                }
                // width: "100%"
                }
                onClick={() => {
                  setdesignonestate(false);
                  setdesigntwostate(true);
                  setborderdesign("Curtain Design");
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              gap: "10px"
            }}
          >
            <Typography variant="h6" sx={{ color: "black" }}>
              Text to be write in platter
            </Typography>
            <TextField
              sx={{ width: "100%", borderColor: "black" }}
              id="outlined-size-small"
              size="small"
              placeholder="Enter cake text"
              value={caketext}
              onChange={e => setcaketext(e.target.value)}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "black",
              ":hover": { backgroundColor: "green" },
              width: "auto"
            }}
            onClick={() => {
              addItem({
                id: cake.id,
                cakeName: cake.cakename,
                price: parseInt(cake.price),
                image: URL.createObjectURL(image),
                description: cake.description,
                quantity: 1,
                weight: weight,
                flavour: flavour,
                basecolour: basecolour,
                bordercolour: bordercolour,
                borderdesign: borderdesign,
                caketext: caketext,
                type: "custom"
              });
            }}
          >
            Add To Cart
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Customdetails;
