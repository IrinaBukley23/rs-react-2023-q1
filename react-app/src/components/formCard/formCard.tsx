import { IUserData } from "types/type";
import "./formCard.scss";

interface IProps {
  user: IUserData;
}

function FormCard(props: IProps) {
  const { user } = props;
  return (
    <div className="user" id="1">
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
          <span>{user.sex}</span>
        </li>
        <li>
          User file: <span>{user.profile}</span>
        </li>
      </ul>
    </div>
  );
}

export default FormCard;
