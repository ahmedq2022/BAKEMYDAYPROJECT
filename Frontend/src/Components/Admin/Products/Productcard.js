import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { useCart } from "react-use-cart";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getCakeData } from "../../../Reducers/Cake";
import { useNavigate } from "react-router-dom";

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

export default function Productcard(props) {
  console.log(props);
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          width: "98%", // height: "100%",
          objectFit: "cover"
        }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ fontWeight: "600" }}
        >
          {props.cakeName}
        </Typography>

        <Typography variant="body2" color="text.primary">
          {props.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete">
          <DeleteIcon
            onClick={() => {
              axios
                .delete("http://localhost:3001/api/deletecake", {
                  params: {
                    id: props.id
                  }
                })
                .then(res => {
                  if (res.data.status == 200) {
                    window.location.reload(true);
                  }
                });
            }}
          />
        </IconButton>
        <IconButton aria-label="update">
          <UpdateIcon
            onClick={() => {
              dispatch(
                getCakeData({
                  id: props.id,
                  name: props.cakeName,
                  image: props.image,
                  price: props.price,
                  description: props.description,
                  category: props.category
                })
              );
              navigate("/updateproduct");
            }}
          />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            {props.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
