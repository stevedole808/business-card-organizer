import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
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
import Form from './NewCard'

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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container">
      <Card className={classes.card}>
        <CardHeader
          action={
            <Link to='/editusercard'>
                <Fab
                size="small"
                color="secondary"
                aria-label="edit"
                className={classes.fab}
                type='button'
                >
                <EditIcon />
                </Fab>
            </Link>
          }
        />
        <CardContent>
            {/* if user's card exists render <BizCard />, else render <EditUserCard /> */}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show QR code"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>QR code here!</Typography>
          </CardContent>
        </Collapse>
      </Card>

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
                  View your saved business cards
                </Typography>
              </CardContent>
              <Link to='/cardlist' className='btn'>
                    <Button variant="contained" color="primary">
                    View Saved Cards
                    </Button>
              </Link>
            </Card>
          </Grid>
          <Grid item xs={6} s={12}>
            <Card className="card">
              <CardContent>
                <Typography variant="body2" color="textPrimary" component="h5">
                  Scan a QR code, or fill out the form to add a new card.
                </Typography>
              </CardContent>
              <Link to="/scanner" className='btn'>
                <Button variant="contained" color="secondary">
                  Add New Card
                </Button>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
