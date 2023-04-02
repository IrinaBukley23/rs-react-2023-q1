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
  setName: (value: string) => void;
  setBirth: (value: string) => void;
  setCountry: (value: string) => void;
  setMale: (value: boolean) => void;
  setFemale: (value: boolean) => void;
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
      male: state.male,
      female: state.female,
      formList: state.formList,
      setFile: (file: string) => {
        dispatch({ type: Actions.SET_FILE, payload: file });
      },
      setName: (name: string) => {
        dispatch({ type: Actions.SET_NAME, payload: name });
      },
      setBirth: (birth: string) => {
        dispatch({ type: Actions.SET_BIRTH, payload: birth });
      },
      setCountry: (country: string) => {
        dispatch({ type: Actions.SET_COUNTRY, payload: country });
      },
      setMale: (male: boolean) => {
        dispatch({ type: Actions.SET_MALE, payload: male });
      },
      setFemale: (female: boolean) => {
        dispatch({ type: Actions.SET_FEMALE, payload: female });
      },
      setFormList: (formList: IUserData[]) => {
        dispatch({ type: Actions.SET_FORMLIST, payload: formList });
      },
    };
  }, [
    state.file,
    state.name,
    state.birth,
    state.country,
    state.male,
    state.female,
    state.formList,
  ]);

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
