import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "react-use-cart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";

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

export const ItemCard = props => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(props);
  const { updateItemQuantity, removeItem } = useCart();
  return (
    <Box>
      {
        <Card sx={{ width: 310 }}>
          <CardMedia
            component="img"
            height="194"
            image={props.image}
            alt="Paella dish"
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
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="share"
              onClick={() => updateItemQuantity(props.id, props.quantity - 1)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton
              aria-label="share"
              onClick={() => updateItemQuantity(props.id, props.quantity + 1)}
            >
              <AddIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={() => removeItem(props.id)}>
              <DeleteIcon />
            </IconButton>
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
      }
    </Box>
  );
};
