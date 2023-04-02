import { useState } from "react";
import { IProd } from "../types/type";
import Card from "../components/card/card";
import Input from "../components/input/input";
import "./page.scss";
import productsData from "../constants/mochData";

function Home() {
  const [prods] = useState(productsData);

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
