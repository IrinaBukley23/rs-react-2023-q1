import { Action, Actions } from "./actions";
import { IUserData } from "../types/type";

export type State = {
  name: string;
  birth: string;
  country: string;
  sex: boolean | string;
  file: string;
  formList: IUserData[];
};

export const initialState: State = {
  name: "",
  birth: "",
  country: "",
  sex: false,
  file: "",
  formList: [],
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Actions.SET_FILE: {
      return {
        ...state,
        file: action.payload,
      };
    }
    case Actions.SET_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case Actions.SET_BIRTH: {
      return {
        ...state,
        birth: action.payload,
      };
    }
    case Actions.SET_COUNTRY: {
      return {
        ...state,
        country: action.payload,
      };
    }
    case Actions.SET_SEX: {
      return {
        ...state,
        sex: action.payload,
      };
    }
    case Actions.SET_FORMLIST: {
      return {
        ...state,
        formList: [...action.payload],
      };
    }
    default:
      return state;
  }
};
