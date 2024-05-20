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
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../../Reducers/User";

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

export default function Usercard(props) {
  console.log(props);
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 300, background: "#fff" }}>
      <CardMedia
        component="img"
        height="auto"
        image="https://static.vecteezy.com/system/resources/previews/002/387/693/original/user-profile-icon-free-vector.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {props.name}
        </Typography>

        <Typography variant="body2" color="text.primary">
          {props.email}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {props.mobile}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {props.address}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete">
          <DeleteIcon
            onClick={() => {
              axios
                .delete("http://localhost:3001/api/deleteuser", {
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
                getUserData({
                  id: props.id,
                  username: props.username,
                  email: props.email,
                  password: props.password,
                  address: props.address,
                  mobile: props.mobile
                })
              );
              navigate("/updateuser");
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
            {props.address}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
