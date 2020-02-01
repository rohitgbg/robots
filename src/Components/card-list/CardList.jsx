import React from "react";
import "./CardList.css";
import { Card } from "../card/Card";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => {
        return (
          <Card
            key={monster.id}
            id={monster.id}
            name={monster.name}
            email={monster.email}
          />
        );
      })}
    </div>
  );
};
