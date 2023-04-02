import { createContext, useMemo, useReducer } from "react";
import { Actions } from "./actions";
import { initialState, reducer, State } from "./reducer";
import { IUserData } from "../types/type";

export const GlobalContext = createContext<IContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export interface IContext extends State {
  setFile: (value: string) => void;
  setUserName: (value: string) => void;
  setUserBirth: (value: string) => void;
  setUserCountry: (value: string) => void;
  setUserSex: (value: boolean) => void;
  setFormList: (value: IUserData[]) => void;
}

export function Provider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    return {
      file: state.file,
      name: state.name,
      birth: state.birth,
      country: state.country,
      sex: state.sex,
      formList: state.formList,
      setFile: (file: string) => {
        dispatch({ type: Actions.SET_FILE, payload: file });
      },
      setUserName: (name: string) => {
        dispatch({ type: Actions.SET_NAME, payload: name });
      },
      setUserBirth: (birth: string) => {
        dispatch({ type: Actions.SET_BIRTH, payload: birth });
      },
      setUserCountry: (country: string) => {
        dispatch({ type: Actions.SET_COUNTRY, payload: country });
      },
      setUserSex: (sex: boolean) => {
        dispatch({ type: Actions.SET_SEX, payload: sex });
      },
      setFormList: (formList: IUserData[]) => {
        dispatch({ type: Actions.SET_FORMLIST, payload: formList });
      },
    };
  }, [
    state.birth,
    state.country,
    state.file,
    state.formList,
    state.name,
    state.sex,
  ]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
