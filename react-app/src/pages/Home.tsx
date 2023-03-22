import { Component } from "react";
import { IProd } from "../types/type";
import Card from "../components/card/card";
import Input from "../components/input/input";
import "./page.scss";
import productsData from "../constants/mochData";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}
interface IState {
  prods: Array<IProd>;
}

class Home extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      prods: productsData,
    };
  }

  render() {
    const { prods } = this.state;
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
}

export default Home;
