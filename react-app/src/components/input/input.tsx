import searchIcon from "../../assets/search.png";

import "./input.scss";

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  onClick: () => void;
}

function Input({ onChange, search, onClick }: IProps) {
  return (
    <div className="search">
      <input
        onChange={onChange}
        type="text"
        value={search}
        placeholder="Enter char name"
      />
      <button
        type="button"
        id="search__btn"
        className="search__img"
        onClick={onClick}
      >
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
}

export default Input;
