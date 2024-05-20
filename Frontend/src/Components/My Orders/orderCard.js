import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";

const OrderCard = props => {
  return (
    <Card sx={{ width: 310 }}>
      <CardMedia
        component="img"
        height="194"
        image={
          props.image
            ? props.image
            : "https://sachascakes.com/cdn/shop/products/PictureCakeShapes2022R2lbsand3lbs_720x.png?v=1665577863"
        }
        alt="Paella dish"
        sx={{
          borderRadius: "14px",
          border: "3px solid black",
          width: "98%",
          objectFit: "cover"
        } // height: "100%",
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.cakeName}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {props.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Q : {props.quantity}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Order Date : {props.orderDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Order Status : {props.orderStatus}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default OrderCard;
