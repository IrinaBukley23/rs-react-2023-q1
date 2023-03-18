import { Component } from "react";
import Card from "../components/card/card";

import './page.scss';

class Home extends Component {
    render () {
        return (
            <>
                <h2 className="title">Home page</h2>;
                <div className="container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </>
        )
    }
}
    

export default Home;