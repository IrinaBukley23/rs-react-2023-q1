import { Component } from "react";
import { ISearch } from "../../types/type";
import searchIcon from "../../assets/search.png";

import "./input.scss";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}
interface IState {
  search: ISearch;
  shouldShowElem?: boolean;
}

class Input extends Component<IProps, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {
      search: {
        searchValue: "",
      },
      shouldShowElem: false,
    };
  }

  componentDidMount(): void {
    this.setState({
      shouldShowElem: false,
      search: {
        searchValue: localStorage.getItem("search") || "",
      },
    });
  }

  componentWillUnmount(): void {
    const { search } = this.state;
    localStorage.setItem("search", search.searchValue);
  }

  handleClick = () => {
    const { search } = this.state;
    this.setState({
      shouldShowElem: true,
    });
    localStorage.setItem("search", search.searchValue);
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      search: {
        searchValue: e.target.value,
      },
    });
  };

  handleClear = () => {
    this.setState({
      search: {
        searchValue: "",
      },
      shouldShowElem: false,
    });
  };

  render() {
    const { shouldShowElem, search } = this.state;
    return (
      <>
        <div className="search">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter your text"
          />
          {shouldShowElem ? (
            <button
              type="button"
              className="search__clear"
              onClick={this.handleClear}
            >
              X
            </button>
          ) : (
            <button
              type="button"
              className="search__img"
              onClick={this.handleClick}
            >
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
}

export default Input;
