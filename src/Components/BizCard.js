import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  Typography,
  Fab,
  CardActions,
  Collapse,
  CardMedia,
  CardContent,
  Grid
} from "@material-ui/core";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import QRCode from "qrcode.react";
import AxiosWithAuth from "../Utils/AxiosWithAuth";

const useStyles = makeStyles(theme => ({
  card: {
    width: 400,
    marginTop: 50
  },
  media: {
    height: 100
    // paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export const BizCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deleteCard = e => {
    e.preventDefault();
    AxiosWithAuth()
      .delete(`api/cards/${props.id}`)
      .then(() => {
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (  
    <Grid s={8} m={4}>
    <Card className={classes.card}>
      <CardHeader
        action={
          <div>
            <NavLink to={`/editusercard/${props.id}`}>
              <Fab
                size="small"
                color="secondary"
                aria-label="edit"
                className={classes.fab}
              >
                <EditIcon />
              </Fab>
            </NavLink>

            <IconButton
              size="small"
              color="primary"
              aria-label="delete"
              className={classes.fab}
              onClick={deleteCard}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        }
      />
      <CardContent>
        <Typography variant="h3" color="textPrimary" component="p">
          {`${props.first_name} ${props.last_name}`}
        </Typography>
        <Typography variant="subtitle1" color="textPrimary" component="p">
          {`${props.phone} ${props.email}`}
        </Typography>
        <Typography variant="h5" color="textSecondary" component="p">
          {`${props.job} ${props.company}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${props.street} ${props.city}, ${props.state} ${props.zip} ${props.country}`}
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
            {`${props.website}`}
          </Typography>
          <div className='container'>
          <QRCode value={`${props.qr}`} size={384} renderAs="svg" />
          </div>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
  );
};
