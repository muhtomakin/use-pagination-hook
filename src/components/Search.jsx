import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import "../css/navbar.scss";

function SearchInput() {
  return (
    <div style={{ display: "flex" }}>
      <SearchIcon className="icon" />
      <input className="input" placeholder="Search..." />
    </div>
  );
}

export default SearchInput;
