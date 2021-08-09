export interface IProduct {
  id: string;
  name: string;
  createdAt: Date | null;
  isEnabled: boolean;
  photoURL?: string;
}

export const emptyProduct: IProduct = {
  id: '',
  name: '',
  createdAt: null,
  isEnabled: true,
  photoURL: '',
};
