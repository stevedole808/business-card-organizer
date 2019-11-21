import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BizCard } from "./BizCard";
import AxiosWithAuth from "../Utils/AxiosWithAuth";

const CardList = props => {
  useEffect(() => {
    AxiosWithAuth()
      .get(`https://businesscardorganizer.herokuapp.com/api/cards/`)
      .then(response => {
        console.log(response.data);
        props.setCards(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return props.cards.map(card => {
    return (
      //   <NavLink to='/' >
      <BizCard
        id={card.id}
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
      //   </NavLink>
    );
  });
};
export default CardList;
