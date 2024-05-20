import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "react-use-cart";
import { Button } from "@mui/material";

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
  const { addItem } = useCart();
  console.log(props);
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
          width: "98%", // height: "100%",
          objectFit: "cover"
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {props.cakeName}
        </Typography>

        <Typography variant="body2" color="text.primary">
          Rs : {props.price} /-
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          variant="contained"
          sx={{ background: "black", color: "white" }}
          onClick={() => {
            addItem({
              id: props.id,
              cakeName: props.cakeName,
              price: parseInt(props.price),
              image: props.image,
              description: props.description,
              quantity: 1,
              type: "cake"
            });
          }}
        >
          ADD TO CART
        </Button>
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
