import { IFormSubmitProps, IUserData } from "../../types/type";

export const submitForm = (user: IUserData, setForm: () => void): void => {
  saveFormInLocal(user);
  setForm();
};

export const saveFormInLocal = (user: IUserData): void => {
  const newUser = saveUser(user);
  if (localStorage.users) {
    localStorage.users = JSON.stringify([
      ...JSON.parse(localStorage.users),
      newUser,
    ]);
  } else {
    localStorage.setItem("users", JSON.stringify([newUser]));
  }
};

export const saveUser = (user: IUserData): IFormSubmitProps => {
  return {
    name: user.name,
    birth: user.birth,
    country: user.country,
    gender: user.gender ? "Female" : "Male",
    file: URL.createObjectURL(user.file[0]),
  };
};

export const isCountry = (value: string) => {
  if (value === "") return false;
  return true;
};
