import { useEffect, useState } from "react";
import { IChar } from "../types/type";
import Card from "../components/card/card";
import Input from "../components/input/input";
import "./page.scss";

function Home() {
  const [charList, setCharList] = useState<IChar[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  async function getData(url: string) {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharList(data.results);
        setLoading(false);
      });
  }
  function getSearchValue(): string {
    const value = localStorage.getItem("value");
    if (value) return value;
    return "";
  }

  useEffect(() => {
    getData(
      `https://rickandmortyapi.com/api/character/?name=${getSearchValue()}`
    );
  }, [search]);

  const handleClick = () => {
    getData(
      `https://rickandmortyapi.com/api/character/?name=${search.toLowerCase()}`
    );
    setSearch("");
    localStorage.setItem("value", search);
  };

  return (
    <>
      <h2 className="title">Home page</h2>
      <div className="search">
        <Input search={search} onChange={handleChange} onClick={handleClick} />
      </div>
      <div className="container">
        {loading ? <h5 className="loading">Loading...</h5> : null}
        {!loading && !charList ? (
          <h5 className="loading"> Nothing found </h5>
        ) : (
          charList.map((char: IChar) => {
            return <Card char={char} key={char.id} />;
          })
        )}
      </div>
    </>
  );
}

export default Home;
