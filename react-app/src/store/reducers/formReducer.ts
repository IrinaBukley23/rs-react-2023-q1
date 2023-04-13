import { FormState, initialForm } from "../utils";
import { Action, Actions } from "../actions/actionTypes";

const formReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: FormState = initialForm,
  action: Action
): FormState => {
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
    case Actions.SET_MALE: {
      return {
        ...state,
        male: action.payload,
      };
    }
    case Actions.SET_FEMALE: {
      return {
        ...state,
        female: action.payload,
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

export default formReducer;
