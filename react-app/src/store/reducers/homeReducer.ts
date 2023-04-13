import { HomeState, initialHome } from "../utils";
import { Action, Actions } from "../actions/actionTypes";

const homeReducer = (
  action: Action,
  state: HomeState = initialHome
): HomeState => {
  switch (action.type) {
    case Actions.SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case Actions.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case Actions.SET_DATA: {
      return {
        ...state,
        charList: [...action.payload],
      };
    }
    default:
      return state;
  }
};

export default homeReducer;
