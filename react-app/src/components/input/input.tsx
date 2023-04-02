import { useState } from "react";
import searchIcon from "../../assets/search.png";

import "./input.scss";

function Input() {
  const [search, setSearch] = useState({ searchValue: "" });
  const [shouldShowElem, setShouldShowElem] = useState(false);

  const handleClick = () => {
    setShouldShowElem(true);
    localStorage.setItem("search", search.searchValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ searchValue: e.target.value });
    localStorage.setItem("search", search.searchValue);
  };

  const handleClear = () => {
    setSearch({ searchValue: "" });
    setShouldShowElem(false);
  };

  return (
    <>
      <div className="search">
        <input
          onChange={handleChange}
          type="text"
          value={search.searchValue}
          placeholder="Enter your text"
        />
        {shouldShowElem ? (
          <button type="button" className="search__clear" onClick={handleClear}>
            X
          </button>
        ) : (
          <button type="button" className="search__img" onClick={handleClick}>
            <img src={searchIcon} alt="search" />
          </button>
        )}
      </div>
      {shouldShowElem ? (
        <div className="search__message">
          You are entered - {search.searchValue}{" "}
        </div>
      ) : null}
    </>
  );
}

export default Input;
