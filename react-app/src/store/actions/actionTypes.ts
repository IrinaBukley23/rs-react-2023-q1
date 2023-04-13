import { IChar, IUserData } from "../../types/type";

export enum Actions {
  SET_SEARCH = "SET_SEARCH",
  SET_LOADING = "SET_LOADING",
  SET_DATA = "SET_DATA",
  SET_NAME = "SET_NAME",
  SET_BIRTH = "SET_BIRTH",
  SET_COUNTRY = "SET_COUNTRY",
  SET_MALE = "SET_MALE",
  SET_FEMALE = "SET_FEMALE",
  SET_FILE = "SET_FILE",
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
      type: Actions.SET_DATA;
      payload: IChar[];
    }
  | {
      type: Actions.SET_NAME;
      payload: string;
    }
  | {
      type: Actions.SET_BIRTH;
      payload: string;
    }
  | {
      type: Actions.SET_COUNTRY;
      payload: string;
    }
  | {
      type: Actions.SET_FILE;
      payload: string;
    }
  | {
      type: Actions.SET_MALE;
      payload: boolean | string;
    }
  | {
      type: Actions.SET_FEMALE;
      payload: boolean | string;
    }
  | {
      type: Actions.SET_FORMLIST;
      payload: IUserData[];
    };
