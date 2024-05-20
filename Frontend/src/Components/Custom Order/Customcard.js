import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { useCart } from "react-use-cart";
import { getCakeData } from "../../Reducers/Cake";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";

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

export default function Customcard(props) {

  console.log(props)
  const { addItem } = useCart();
  console.log(props);
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 310, overflow: "visible" }} key={props.id}>
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Paella dish"
        sx={{
          borderRadius: "14px",
          border: "3px solid black",
          width: "99%",
          // height: "100%",
          objectFit: "cover"
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {props.cakeName}
        </Typography>

        <Typography variant="body2" color="text.primary ">
          Rs : {props.price} /-
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Button
          variant="contained"
          sx={{ background: "black", color: "white" }}
          onClick={() => {
            dispatch(
              getCakeData({
                id: props.id,
                cakename: props.cakeName,
                image: props.image,
                price: props.price,
                description: props.description,
                category: props.category
              })
            );
            navigate("/customdetail");
          }}
        >
          DESIGN YOUR CAKE
        </Button>
      </CardActions>
    </Card>
  );
}
