import React from "react";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  return (
    <div className="card">
      <h2> {data.name}</h2>
      <img alt={data.title} src={data.image_url}></img>
      <p>rating: {data.rating}</p>
      <div className="single-anime-container">
        <Link className="link" to={{ pathname: "/singleAnime", state: data }}>
          open
        </Link>
      </div>
    </div>
  );
};

export default Card;
