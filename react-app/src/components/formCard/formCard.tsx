import { IUserData } from "types/type";
import "./formCard.scss";

interface IProps {
  user: IUserData;
}

function FormCard(props: IProps) {
  const { user } = props;
  return (
    <div className="user">
      <div
        className="form-card__image"
        style={{ backgroundImage: `url(${user.file})` }}
      />
      <ul>
        <li>
          User name: <span>{user.name}</span>
        </li>
        <li>
          User birth: <span>{user.birth}</span>
        </li>
        <li>
          User country: <span>{user.country}</span>
        </li>
        <li>
          User sex:
          <span>{user.gender}</span>
        </li>
      </ul>
    </div>
  );
}

export default FormCard;
