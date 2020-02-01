import React from "react";
import "./Card.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="robo"
      src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
    />
    <h2>{props.name}</h2>
    <p>{props.email}</p>
  </div>
);
