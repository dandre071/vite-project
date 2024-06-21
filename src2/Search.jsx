import * as React from 'react';
import "./App.css";
import array from "./db.js";


function Search() {
  return (
    <div>
      
      {" "}
      {array.map((x) => (
        <h1 className="item">{x.toLowerCase()}</h1>
      ))}{" "}
      ;
    </div>
  );
}
export default Search;
