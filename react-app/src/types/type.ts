export interface IProd {
  id: number;
  title: string;
  price: number;
  description?: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
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
