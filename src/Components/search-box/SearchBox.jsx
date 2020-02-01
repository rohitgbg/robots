import React from "react";
import "./SearchBox.css";

export const SearchBox = props => (
  <input
    className="search"
    type="search"
    placeholder="search monster"
    onChange={props.handleChange}
  />
);
