import React from "react";
import { IUserData } from "types/type";
import "./formCard.scss";

interface IProps {
  user: IUserData;
}

class FormCard extends React.PureComponent<IProps> {
  render() {
    const { user } = this.props;
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
            <span>{user.male ? " male" : " female"}</span>
          </li>
          <li>
            User file: <span>{user.profile}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default FormCard;
