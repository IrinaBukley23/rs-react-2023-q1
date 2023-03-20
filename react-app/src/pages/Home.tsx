import { Component } from "react";
import { IProd } from "../types/type";
import Card from "../components/card/card";

import './page.scss';
import { productsData } from "../constants/mochData";

interface IProps {}
interface IState {
    prods: Array<IProd>
}

class Home extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);
        this.state = {
            prods: productsData
        }
    }
    
    render () {
        const { prods } = this.state;
        return (
            <>
                <h2 className="title">Home page</h2>
                <div className="container">
                    {prods.map((prod: IProd, i) => {
                        return <Card prodItem={prod} key={i} />
                    })}
                </div>
            </>
        )
    }
}
    

export default Home;