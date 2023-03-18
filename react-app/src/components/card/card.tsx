import { Component } from "react";

import './card.scss';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <h5 className="card__title">iPhone 9</h5>
                <div className="card__wrapper">
                    <div className="card__image">
                        <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="iPhone 9" />
                    </div>
                    <div className="card__info">
                        <p className="card__info-text">Category: smartphones</p>
                        <p className="card__info-text">Brand: Apple</p>
                        <p className="card__info-text">Price: €549</p>
                        <p className="card__info-text">Rating: 4.69</p>
                        <p className="card__info-text">In stock: 94</p>
                        <p className="card__info-text">Discount: 12.96%</p>
                    </div>
                    <div className="card__btns">
                        <button className="card__btn">Add to cart</button>
                        <button className="card__btn">Details</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
