import { IChar, IUserData } from "../../types/type";

export enum Actions {
  SET_SEARCH = "SET_SEARCH",
  SET_LOADING = "SET_LOADING",
  SET_CHARLIST = "SET_CHARLIST",
  SET_FORMLIST = "SET_FORMLIST",
}

export type Action =
  | {
      type: Actions.SET_SEARCH;
      payload: string;
    }
  | {
      type: Actions.SET_LOADING;
      payload: boolean;
    }
  | {
      type: Actions.SET_CHARLIST;
      payload: IChar[];
    }
  | {
      type: Actions.SET_FORMLIST;
      payload: IUserData[];
    };
