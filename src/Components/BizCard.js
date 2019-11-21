import React from "react";
import { Link } from "react-router-dom";
import {Card, CardHeader, Typography, Fab,CardActions, Collapse, CardMedia, CardContent} from '@material-ui/core'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles';

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
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

export const BizCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
    return (
    <div className='container'>
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
                <Typography variant="h3" color="textSecondary" component="p">
                    {`${props.first_name} ${props.last_name}`} 
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" component="p">
                    {`${props.phone} ${props.email}`} 
                </Typography>
                <Typography variant="h5" color="textSecondary" component="p">
                    {`${props.job} ${props.company}`} 
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
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
                <Typography variant="body1" color="textSecondary" component="p">
                    {`${props.website}`} 
                </Typography>
                {props.qr}
                {/* <svg
                    width="50%"
                    height="50%"
                    viewBox="0 0 230 230"
                >
                    <path style={{fill:'rgb(0, 0, 0)'}} d={props.qr} />
                </svg> */}
                </CardContent>
            </Collapse>
        </Card>
    </div>
    );
}

