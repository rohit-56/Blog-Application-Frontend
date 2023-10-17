import React from "react";
import "./styles.css";

const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
  return (
    <div className="searchBar-wrap">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          onChange={handleSearchKey}
          placeholder="Search By Category"
          value={value}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <button>Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
