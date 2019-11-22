import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { BizCard } from "./BizCard";
import AxiosWithAuth from "../Utils/AxiosWithAuth";
import { LinearProgress, Button } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import { makeStyles, withStyles } from '@material-ui/core/styles';


const CardList = props => {
  const [isLoading, setIsLoading] = useState(true);
  
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
  const classes = useStyles();
  
  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(orange[500]),
      backgroundColor: orange[500],
      '&:hover': {
        backgroundColor: orange[700],
      },
    },
  }))(Button);

  const userId = localStorage.getItem("userId");
  console.log("what is this??", props);
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
                qr={card.id}
              />
            ))
          ) : (
            <Link to={`/addnewcard/${userId}`} className='btn'>
              <ColorButton variant="contained" color="primary" className={classes.margin}>
                Create Card
              </ColorButton>
            </Link>
          )}
        </>
      )}
    </>
  );
};
export default CardList;
