import { IChar } from "types/type";
import "./modal.scss";

interface IProps {
  char: IChar;
  isOpen: boolean;
  handleClose: (e: React.MouseEvent) => void;
}

function Modal({ isOpen = false, handleClose, char }: IProps) {
  return !isOpen ? null : (
    <div
      className="visible"
      onClick={(e: React.MouseEvent) => handleClose(e)}
      aria-hidden="true"
    >
      <div className="modal__content">
        <button
          type="button"
          className="modal__btn"
          onClick={(e: React.MouseEvent) => handleClose(e)}
        >
          X
        </button>
        <h3 className="modal__content-title"> {char.name} </h3>
        <div className="modal__wrapper">
          <div className="modal__content-img">
            <img src={char.image} alt={char.name} />
          </div>
          <ul className="modal__content-descr">
            <li> Created: {char.created} </li>
            <li> Gender: {char.gender} </li>
            <li> Species: {char.species} </li>
            <li> Status: {char.status} </li>
            <li> Location: {char.location.name} </li>
            <li> Origin: {char.origin.name} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
