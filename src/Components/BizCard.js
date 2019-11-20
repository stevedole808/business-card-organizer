import React from "react";
import {Card, CardHeader, Typography, Fab,CardActions, Collapse, CardMedia, CardContent} from '@material-ui/core'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
      width: 750,
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
        <Card className={classes.card}>
            <CardHeader
                action={
                    <Fab size='small' color="secondary" aria-label="edit" className={classes.fab}>
                        <EditIcon />
                    </Fab>
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
                <Typography paragraph>
                    rest of info in typography tags
                </Typography>
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
}

