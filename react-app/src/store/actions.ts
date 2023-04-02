import { IUserData } from "../types/type";

export enum Actions {
  SET_NAME = "SET_NAME",
  SET_BIRTH = "SET_BIRTH",
  SET_COUNTRY = "SET_COUNTRY",
  SET_SEX = "SET_SEX",
  SET_FILE = "SET_FILE",
  SET_FORMLIST = "SET_FORMLIST",
}

export type Action =
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
      type: Actions.SET_SEX;
      payload: boolean | string;
    }
  | {
      type: Actions.SET_FORMLIST;
      payload: IUserData[];
    };
