import { useEffect, useState } from "react";
import { IChar } from "../types/type";
import Card from "../components/card/card";
import Input from "../components/input/input";
import "./page.scss";

function Home() {
  const [charList, setCharList] = useState<IChar[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <h2 className="title">Home page</h2>
      <div className="search">
        <Input />
      </div>
      <div className="container">
        {loading ? (
          <h5 className="loading">Loading...</h5>
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
