import { IChar } from "types/type";
import { Actions } from "./actionTypes";

export const setSearch = (search: string) => ({
  type: Actions.SET_SEARCH,
  payload: search,
});

export const setLoading = (loading: boolean) => ({
  type: Actions.SET_LOADING,
  payload: loading,
});

export const setData = (data: IChar[]) => ({
  type: Actions.SET_CHARLIST,
  payload: data,
});
