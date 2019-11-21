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
  const [cards, setCard] = useState([])
  const classes = useStyles();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
     AxiosWithAuth()
        .get(`api/collection/${userId}`)
        .then(response => {
            console.log(response.data)
            setCard(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}, [])
return(
    <div className={`${classes.root}`}>
        <Grid
        container
        spacing={0}
        direction="column-reverse"
        justify="space-evenly"
        alignItems="center"
        >
        {cards.map(card => {
            return(
                <Grid xs={6} s={10}>
                    <BizCard
                        key={card.id}
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
                </Grid>
            )
        })}
        </Grid>
    </div>
)
}
export default CardList
