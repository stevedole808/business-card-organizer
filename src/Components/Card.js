import React, { useState, useEffect } from 'react';
import axios from 'axios';

const card = (props) => {
  const [card, setCard] = useState();
  // console.log(props);
  useEffect(() => {
    // const id = Number(props.match.params.id);;
    //    axios
    //     .get(`http://localhost:5000/api/movies/${id}`)
    //     .then(response => {
    //       setCard(response.data);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });

  },[]);

  if (!card) {
    return <div>Loading card information...</div>;
  }

  const { first_name, last_name, email, company, job, street, city, zip, state, country, website} = card;
  return (
    <div >
      <div >
        <h2></h2>
        <div>
          <em></em>
        </div>
        <div >
           <strong></strong>
        </div>
        <h3></h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

export default Card;

// const card= createMuiTheme({
//       props: {                   
//         MuiTypography: {
//           variantMapping: {                                                  
//             h1: 'h2',                                                                            
//             h2: 'h2',                                                            
//             h3: 'h2',                   
//             h4: 'h2',                                                       
//             h5: 'h2',                                             
//             h6: 'h2',                                        
//             subtitle1: 'h2',
//             subtitle2: 'h2',                
//             body1: 'span',                                                      
//             body2: 'span',                                                                                                                        
//           },                                                                                            
//         },           
//       },                                                                                        
//     });
    