import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {BizCard} from './BizCard'
import AxiosWithAuth from '../Utils/AxiosWithAuth'

const CardList = props => { 
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
})
return(
    cards.map(card => {
        return(
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
        )
    })
)
}
export default CardList
