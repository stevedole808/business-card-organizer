import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@material-ui/core';
import { BizCard } from './BizCard';
import AxiosWithAuth from '../Utils/AxiosWithAuth';

const Confirm = props => {
    const [card, setCard] = useState([])
    
    const handleAdd = e => {
        e.preventDefault();
    
        AxiosWithAuth
            .post(
                "api/collection/",
                props.id
            )
            .then(response => {
                console.log(response, props);
                props.history.push("/cardlist");
            })
            .catch(error => {
                console.log("Problem creating card: ", error)
            })
    };

    // useEffect((props) => {
    //      AxiosWithAuth()
    //         .get(`api/cards/${props.id}`)
    //         .then(response => {
    //             console.log(response.data)
    //             setCard(response.data)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [])
    
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
                <Button variant='contained' color='primary' onClick={handleAdd}>Add</Button>
                <Button color='secondary'>Cancel</Button>
            </div>
        </>
    )
}

export default Confirm;