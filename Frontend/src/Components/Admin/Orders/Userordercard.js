import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions, Typography } from "@mui/material";
import { API_BASE_URL } from "../../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));
const Userordercard = props => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ width: 310 }}>
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Paella dish"
        sx={{
          borderRadius: "14px",
          border: "3px solid black",
          width: "99%", // height: "100%",
          objectFit: "cover"
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {props.cakeName}
        </Typography>

        <Typography variant="body2" color="text.primary">
          {props.price}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Q : {props.quantity}
        </Typography>

        <Typography variant="body2" color="text.primary">
          Order Date : {props.orderDate}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Order Status : {props.orderStatus}
        </Typography>
        <Typography variant="body2" color="text.primary">
          name : {props.username}
        </Typography>
        <Typography variant="body2" color="text.primary">
          email : {props.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          sx={{
            ":hover": { backgroundColor: "green" },
            background: "black",
            color: "#ffffff"
          }}
          onClick={() => {
            axios
              .put(API_BASE_URL + "updateorder", {
                id: props.id,
                username: props.username,
                email: props.email,
                address: props.address,
                mobile: props.mobile,
                cakeName: props.cakeName,
                image: props.image,
                quantity: props.quantity,
                amount: props.price,
                weight: props.weight,
                flavour: props.flavour,
                basecolour: props.basecolour,
                bordercolour: props.bordercolour,
                borderdesign: props.borderdesign,
                caketext: props.caketext,
                type: props.type,
                currentDate: props.currentDate,
                orderStatus: "delivered"
              })
              .then(res => {
                if (res.data.status == 200) {
                  alert(res.data.message);
                  // window.location.reload(true);
                }
              });
          }}
        >
          Deliver
        </Button>
        {props.type == "custom"
          ? <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          : ""}
      </CardActions>
      {props.type == "custom"
        ? <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Details:</Typography>
              <Typography paragraph>
                Kg : {props.weight}
              </Typography>
              <Typography paragraph>
                Base Colour : {props.basecolour}
              </Typography>
              <Typography paragraph>
                Border Colour : {props.bordercolour}
              </Typography>
              <Typography paragraph>
                Border Design : {props.borderdesign}
              </Typography>
              <Typography paragraph>
                Cake Text : {props.caketext}
              </Typography>
              <Typography paragraph>
                Type : {props.type}
              </Typography>
            </CardContent>
          </Collapse>
        : ""}
    </Card>
  );
};
export default Userordercard;
