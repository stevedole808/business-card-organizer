import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';

const Dashboard = () => {

    const useStyles = makeStyles(theme => ({
        root: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column"
        },
        margin: {
            margin: theme.spacing(1)
        },
        withoutLabel: {
            marginTop: theme.spacing(3)
        },
        textField: {
            width: 375
        }
        }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        User Card
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        View Cards
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}

export default Dashboard;