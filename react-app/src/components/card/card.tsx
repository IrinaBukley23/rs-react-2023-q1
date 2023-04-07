import { IChar } from "../../types/type";

import "./card.scss";

interface IProps {
  char: IChar;
}

function Card(props: IProps) {
  const { char } = props;
  return (
    <div className="card" id={String(char.id)}>
      <h5 className="card__title">{char.name}</h5>
      <div className="card__wrapper">
        <div className="card__image">
          <img src={char.image} alt={char.name} />
        </div>
        <div className="card__info">
          <p className="card__info-text">Species: {char.species}</p>
          <p className="card__info-text">Status: {char.status}</p>
          {/* <p className="card__info-text">Price: €{char.price}</p>
          <p className="card__info-text">Rating: {char.rating}</p>
          <p className="card__info-text">In stock: {char.stock}</p>
          <p className="card__info-text">
            Discount: {char.discountPercentage}
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
