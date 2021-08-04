export interface IProduct {
  id: string;
  name: string;
  createdAt: string;
  isEnabled: boolean;
  photoURL?: string;
}

export const emptyProduct: IProduct = {
  id: '',
  name: '',
  createdAt: '',
  isEnabled: true,
  photoURL: '',
};
