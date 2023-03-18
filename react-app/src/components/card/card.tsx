import { Component } from "react";
import { IProd } from "../../types/type";

import './card.scss';

interface IProps {
    prodItem: IProd
}

class Card extends Component<IProps> {
    render() {
        const { prodItem } = this.props;
        return (
            <div className="card">
                <h5 className="card__title">{prodItem.title}</h5>
                <div className="card__wrapper">
                    <div className="card__image">
                        <img src={prodItem.thumbnail} alt={prodItem.title} />
                    </div>
                    <div className="card__info">
                        <p className="card__info-text">Category: {prodItem.category}</p>
                        <p className="card__info-text">Brand: {prodItem.brand}</p>
                        <p className="card__info-text">Price: €{prodItem.price}</p>
                        <p className="card__info-text">Rating: {prodItem.rating}</p>
                        <p className="card__info-text">In stock: {prodItem.stock}</p>
                        <p className="card__info-text">Discount: {prodItem.discountPercentage}</p>
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
