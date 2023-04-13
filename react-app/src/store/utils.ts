import { IChar, IUserData } from "types/type";

export type State = {
  home: HomeState;
  form: FormState;
};

export type HomeState = {
  search: string;
  loading: boolean;
  charList: IChar[];
};

export type FormState = {
  name: string;
  birth: string;
  country: string;
  gender: boolean;
  file: string;
  formList: IUserData[];
};

export const initialHome: HomeState = {
  search: "",
  loading: false,
  charList: [],
};

export const initialForm: FormState = {
  name: "",
  birth: "",
  country: "",
  gender: false,
  file: "",
  formList: [],
};
