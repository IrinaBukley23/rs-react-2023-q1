import { FormState, initialForm } from "../utils";
import { Action, Actions } from "../actions/actionTypes";

const formReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: FormState = initialForm,
  action: Action
): FormState => {
  switch (action.type) {
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
