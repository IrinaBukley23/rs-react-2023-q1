import { useEffect, useState } from "react";
import { IProd } from "../types/type";
import Card from "../components/card/card";
import Input from "../components/input/input";
import "./page.scss";
import productsData from "../constants/mochData";

function Home() {
  const [prods] = useState(productsData);
  const [mochData, setMochData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    const res = data.results;
    console.log(res);
    setMochData(res);
    setLoading(false);
  }

  try {
    useEffect(() => {
      getData("https://rickandmortyapi.com/api/character/?status=alive");
    }, []);
  } catch (onError) {
    console.error("Error...");
  }

  return (
    <>
      <h2 className="title">Home page</h2>
      <div className="search">
        <Input />
      </div>
      <div className="container">
        {prods.map((prod: IProd) => {
          return <Card prodItem={prod} key={prod.id} />;
        })}
      </div>
    </>
  );
}

export default Home;
