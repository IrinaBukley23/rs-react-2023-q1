export interface IChar {
  id: number;
  created: string;
  gender: string;
  image: string;
  name: string;
  species: string;
  status: string;
  location: ILocation;
  origin: IOrigin;
}

interface ILocation {
  name: string;
  url: string;
}

interface IOrigin {
  name: string;
  url: string;
}

export interface ISearch {
  searchValue: string;
}

export interface ICountry {
  id: string;
  value: string;
  title: string;
}

export interface IFormData {
  id: string;
  name: string;
  birth: string;
  country: string;
  profile?: string;
  male: boolean;
  female: boolean;
  agree?: boolean;
}

export interface IUserData {
  id?: string;
  name: string;
  birth: string;
  country: string;
  file: FileList;
  gender: string;
}

export interface IFormProps {
  setForm: () => void;
}

export interface IFormSubmitProps {
  [key: string]: string;
}
