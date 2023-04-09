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
    const response = await fetch(url);
    const data = await response.json();
    const res = data.results;
    setCharList(res);
    setLoading(false);
  }

  try {
    useEffect(() => {
      getData("https://rickandmortyapi.com/api/character/?status=alive");
    }, []);
  } catch (onError) {
    throw new Error("Something went wrong...");
  }

  const handleClick = () => {
    getData(
      `https://rickandmortyapi.com/api/character/?name=${search.toLowerCase()}`
    );
    setSearch("");
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
