import React from "react";
import "./MovieCards.css";

function MovieCards(props) {
  return (
    <div className="movieCard">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <p>{props.para}</p>
    </div>
  );
}

export default MovieCards;
