import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BizCard } from "./BizCard";
import AxiosWithAuth from "../Utils/AxiosWithAuth";
import { LinearProgress } from "@material-ui/core";
const CardList = props => {
  const [isLoading, setIsLoading] = useState(true);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    AxiosWithAuth()
      .get(`api/cards/user/${userId}`)
      .then(response => {
        console.log(response.data);
        props.setCards(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {isLoading && <LinearProgress />}
      {!isLoading && (
        <>
          {props.cards.length ? (
            props.cards.map(card => (
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
            ))
          ) : (
            <h1> Add Card </h1>
          )}
        </>
      )}
    </>
  );
};
export default CardList;
