import React, { useState, useEffect } from 'react';
import {BizCard} from './BizCard'
import AxiosWithAuth from '../Utils/AxiosWithAuth'
import { Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

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
  }));

const CardList = props => { 
<<<<<<< HEAD
    const classes = useStyles();    
    const [cards, setCard] = useState([])
    useEffect(() => {
         AxiosWithAuth()
            .get(`https://businesscardorganizer.herokuapp.com/api/cards/`)
            .then(response => {
                console.log(response.message)
                setCard(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    },[])
=======
  const [cards, setCard] = useState([])
  useEffect(() => {
     AxiosWithAuth()
        .get(`api/cards/`)
        .then(response => {
            console.log(response.message)
            setCard(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}, [])
>>>>>>> 92a311bee766f31cd4079eae670d34cf2cd264ff
return(
    <div className={`${classes.root}`}>
        <Grid
        container
        spacing={2}
        direction="column-reverse"
        justify="space-evenly"
        alignItems="center"
        >
        {cards.map(card => {
            return(
                <Grid xs={6} s={10}>
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
                    />
                </Grid>
            )
        })}
        </Grid>
    </div>
)
}
export default CardList
