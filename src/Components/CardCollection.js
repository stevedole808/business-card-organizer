import React, { useState, useEffect } from "react";
import { BizCard } from "./BizCard";
import AxiosWithAuth from "../Utils/AxiosWithAuth";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CollectedCard } from "./CollectedCard";

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
  }
}));

const CardList = props => {
  const [cards, setCard] = useState([]);
  const classes = useStyles();
  const userId = localStorage.getItem("userId");
  const [search, setSearch] = useState("");

  const handleChange = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    AxiosWithAuth()
      .get(`api/collection/${userId}`)
      .then(response => {
        console.log(response.data);
        setCard(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className={`${classes.root}`}>
      <TextField
        id="standard-search"
        label="Search for event"
        type="search"
        className={classes.textField}
        margin="normal"
        onChange={handleChange}
        name="search"
        value={search}
      />
      <Grid
        container
        spacing={0}
        direction="column-reverse"
        justify="space-evenly"
        alignItems="center"
      >
        {search.length
          ? cards
              .filter(card => {
                const event = card.event.toLowerCase();
                const filter = search.toLowerCase();
                return event.includes(filter);
              })
              .map(card => {
                return (
                  <Grid xs={6} s={10}>
                    <CollectedCard
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
                      event={card.event}
                    />
                  </Grid>
                );
              })
          : cards.map(card => {
              return (
                <Grid xs={6} s={10}>
                  <CollectedCard
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
                    event={card.event}
                  />
                </Grid>
              );
            })}
      </Grid>
    </div>
  );
};
export default CardList;
