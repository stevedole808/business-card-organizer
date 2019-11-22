import React, { useState } from "react";
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
  TextField,
  Button
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
    width: 750,
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

export const CollectedCard = props => {
  const classes = useStyles();
  const [editing, setEditing] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [event, setEvent] = useState(props.event);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = event => {
    setEvent(event.target.value);
  };

  console.log("props in collected card", props);
  const deleteCard = e => {
    e.preventDefault();
    AxiosWithAuth()
      .delete(`api/collection/${props.qr}`)
      .then(() => {
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };
  const addEvent = e => {
    e.preventDefault();
    AxiosWithAuth()
      .put(`api/collection/${props.qr}`, { event })
      .then(() => {
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <div>
            <Fab
              type="button"
              size="small"
              color="secondary"
              aria-label="edit"
              className={classes.fab}
              onClick={e => {
                e.preventDefault();
                setEditing(true);
              }}
            >
              <EditIcon />
            </Fab>

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
        <Typography variant="body2" color="textSecondary" component="p">
          {`${props.first_name} ${props.last_name}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${props.phone} ${props.email}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${props.job} ${props.company}`}
        </Typography>
        {editing ? (
          <>
            <TextField
              onChange={handleChange}
              name="event"
              label="event"
              value={event}
            />
            <Button onClick={addEvent}>Save</Button>
          </>
        ) : (
          <h4>Event: {props.event}</h4>
        )}
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
          <Typography paragraph>rest of info in typography tags</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${props.street} ${props.city}, ${props.state} ${props.zip} ${props.country}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${props.website}`}
          </Typography>
          <CardMedia
            className={classes.media}
            image="src/Images/wikipediaQR.svg"
            title="QR code"
          />
        </CardContent>
      </Collapse>
    </Card>
  );
};
