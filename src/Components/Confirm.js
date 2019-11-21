import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import {BizCard} from './BizCard';
import axios from 'axios';
import AxiosWithAuth from '../Utils/AxiosWithAuth';

const Confirm = props => {
    const [info, setInfo] = useState()
    const handleAdd = () => {
        // push this card to user's saved card list
    }

    useEffect(() => {
         AxiosWithAuth()
            .get(`https://businesscardorganizer.herokuapp.com/api/cards/14`)
            .then(response => {
                console.log(response.data)
                setInfo(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    
    return(
        <>
            <BizCard
                props={info}
            />
            <div className='buttons'>
                <Button variant='contained' color='primary' onClick={handleAdd}>Add</Button>
                <Button color='secondary'>Cancel</Button>
            </div>
        </>
    )
}

export default Confirm;