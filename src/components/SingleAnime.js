import React, { useState, useEffect } from 'react';

import Card from './Card';
const SingleAnime = (props) => {
    const {history:{goBack}} = props;
    const {location:{state}} = props;
    console.log('single' , state)

    return ( 
        <>
        <div>
        <h2>title: {state.name}</h2>
        <img  alt={state.title} src={state.image_url}></img>
        <p>rating: {state.rating}</p> 
        <p>{state.description}</p>
        <button onClick={() => goBack()}>Go Back</button>
      
        </div>

        </>
     );
}
 
export default SingleAnime;