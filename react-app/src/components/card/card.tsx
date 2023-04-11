import { useState } from "react";
import Modal from "../modal/modal";
import { IChar } from "../../types/type";

import "./card.scss";

interface IProps {
  char: IChar;
}

function Card(props: IProps) {
  const { char } = props;
  const [isModal, setIsModal] = useState(false);

  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains("modal__btn") ||
      target.classList.contains("visible")
    )
      setIsModal(false);
  };

  const handleOpenModal = () => {
    setIsModal(true);
  };

  return (
    <>
      <div
        className="card"
        id={String(char.id)}
        onClick={handleOpenModal}
        aria-hidden="true"
      >
        <h5 className="card__title">{char.name}</h5>
        <div className="card__wrapper">
          <div className="card__image">
            <img src={char.image} alt={char.name} />
          </div>
          <div className="card__info">
            <p className="card__info-text">Species: {char.species}</p>
            <p className="card__info-text">Status: {char.status}</p>
          </div>
        </div>
        <button className="card__btn" type="button" onClick={handleOpenModal}>
          More info
        </button>
      </div>
      <Modal
        char={char}
        isOpen={isModal}
        handleClose={(e: React.MouseEvent) => handleClose(e)}
      />
    </>
  );
}

export default Card;
