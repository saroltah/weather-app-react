import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form className="search-engine">
        <input className="type-city" type="search" placeholder="Type a city" />
        <input className="search" type="submit" value="Search" />
      </form>
    </div>
  );
}
