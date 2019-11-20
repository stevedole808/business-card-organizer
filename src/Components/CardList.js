// import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom';
// import axios from 'axios';

// const CardList = props => {
//   const [cards, setCard] = useState([])
//   useEffect(() => {
//     const geCard = () => {
//       axios
//         // .get(PUT API HERE)
//         .then(response => {
//           setCard(response.data);
//         })
//         .catch(error => {
//           console.log('Server Error', error);
//         });
//     }
//     
//     getCard();
//   }, []);
//   
//   return (
//     <div >
//       {cards.map(card => (
//         <CardDetails key={card.id} card={card} />
//       ))}
//     </div>
//   );
// }

// function CardDetails({ card }) {
//   const { first_name, last_name, phone, email, company, job, street, city, zip, state, country,website} = card;
//   return (
//     // <Link to={`/movie/${movie.id}`}>
//       <div >
//       <h2></h2>
//       <div>
//         <em></em>
//       </div>
//       <div >
//         <strong></strong>
//       </div>
//       <h3></h3>

//       {stars.map(star => (
//         <div key={star} className="card-star">
//           {star}
//         </div>
//       ))}
//       </div>
    // </Link>
  );
}

// export default CardList;

//This will fix EVERYTHING