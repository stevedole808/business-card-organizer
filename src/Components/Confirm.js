import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { BizCard } from './BizCard';
import AxiosWithAuth from '../Utils/AxiosWithAuth';

const Confirm = props => {
    const [card, setCard] = useState([])
    const handleAdd = () => {
        // push this card to user's saved card list
    }

    useEffect((props) => {
         AxiosWithAuth()
            .get(`api/cards/${props.id}`)
            .then(response => {
                console.log(response.data)
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
                qr={card.qr_svg}
            />

            <div className='buttons'>
                <Button variant='contained' color='primary' onClick={handleAdd}>Add</Button>
                <Button color='secondary'>Cancel</Button>
            </div>
        </>
    )
}

export default Confirm;