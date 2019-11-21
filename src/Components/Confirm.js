import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@material-ui/core';
import { BizCard } from './BizCard';
import AxiosWithAuth from '../Utils/AxiosWithAuth';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const Confirm = props => {
    const [card, setCard] = useState([])
    const userId = localStorage.getItem('userId')

    const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          alignItems: 'center',
        },
        wrapper: {
          margin: theme.spacing(1),
          position: 'relative',
        },
        buttonSuccess: {
          backgroundColor: green[500],
          '&:hover': {
            backgroundColor: green[700],
          },
        },
        fabProgress: {
          color: green[500],
          position: 'absolute',
          top: -6,
          left: -6,
          zIndex: 1,
        },
        buttonProgress: {
          color: green[500],
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginTop: -12,
          marginLeft: -12,
        },
      }));
      

    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef();
  
    const buttonClassname = clsx({
      [classes.buttonSuccess]: success,
    });
  
    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
  
    const handleButtonClick = () => {
      if (!loading) {
        setSuccess(false);
        setLoading(true);
        timer.current = setTimeout(() => {
          setSuccess(true);
          setLoading(false);
        }, 2000);
      }
    };

    const handleAdd = () => {
    
        AxiosWithAuth()
            .post(
                "/api/collection",
                {card_receiver: Number(userId),
                card_id: Number(props.history.location.state.id)
                }
            )
            .then(response => {
                console.log(response, props);
                props.history.push("/cardlist");
            })
            .catch(error => {
                console.log("Problem creating card: ", error)
            })
    };

    useEffect(() => {
        console.log('confirm props',typeof Number(userId))
         AxiosWithAuth()
            .get(`api/cards/${props.history.location.state.id}`)
            .then(response => {
                // console.log(response)
                setCard(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    
    return(
        <>
            <BizCard 
                first_name={card.first_name}
                last_name={card.last_name}
                phone={card.phone}
                email={card.email}
                company={card.company}
                job={card.job}
                street={card.street}
                city={card.city}
                zip={card.zip}
                state={card.state}
                country={card.country}
                website={card.website}
                qr={card.id}
            />
            <Typography variant="body2" color="textPrimary" component="h5">
                  Save this card to your collection?
            </Typography>

            <div className='buttons'>
                <Button
                variant="contained"
                color="primary"
                className={buttonClassname}
                disabled={loading}
                onClick={()=>{
                    handleButtonClick()
                    handleAdd()
                }}
                >
                Add
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                <Link to='/scanner'>
                    <Button>Cancel</Button>
                </Link>
            </div>
        </>
  );
}

export default Confirm;