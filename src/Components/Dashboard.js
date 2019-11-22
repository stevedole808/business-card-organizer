import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import Form from "./NewCard";
import { BizCard } from "./BizCard";
import AxiosWithAuth from "../Utils/AxiosWithAuth";

const useStyles = makeStyles(theme => ({
  card: {
    width: 750
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

// const renderNewCard = () => {
//     <>
//     <Typography variant="body2" color="textSecondary" component="p">
//         Please create your business card here:
//     </Typography>
//     <Form />
//     </>
// }

const Dashboard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const userId = localStorage.getItem("userId");
  const [cards, setCards] = useState([]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    AxiosWithAuth()
      .get(`api/cards/user/${userId}`)
      .then(response => {
        console.log("get res data", response.data);
        setCards(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <div className={classes.root}>
        <Grid
          container
          spacing={8}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6} s={12}>
            <Card className="card">
              <CardContent>
                <Typography variant="body2" color="textPrimary" component="h5">
                  View your card collection.
                </Typography>
              </CardContent>
              <Link to="/collection" className="btn">
                <Button variant="contained" color="primary">
                  View Collection
                </Button>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={6} s={12}>
            <Card className="card">
              <CardContent>
                <Typography variant="body2" color="textPrimary" component="h5">
                  Scan a QR code to add a card to your collection.
                </Typography>
              </CardContent>
              <Link to="/scanner" className="btn">
                <Button variant="contained" color="secondary">
                  Scan Card
                </Button>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </div>
      <CardList cards={cards} setCards={setCards} />
    </div>
  );
};

export default Dashboard;
