import { IChar } from "types/type";
import { HomeState, initialHome } from "../utils";
import { Actions } from "../actions/actionTypes";

const homeReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: HomeState = initialHome,
  action: { type: string; payload: unknown }
): HomeState => {
  switch (action.type) {
    case Actions.SET_SEARCH: {
      return { ...state, search: action.payload as string };
    }
    case Actions.SET_LOADING: {
      return { ...state, loading: action.payload as boolean };
    }
    case Actions.SET_CHARLIST: {
      return { ...state, charList: [...(action.payload as IChar[])] };
    }
    default:
      return state;
  }
};

export default homeReducer;
