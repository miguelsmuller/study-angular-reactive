export interface IUser {
  uid: string;
  name: string;
  email: string;
  emailVerified: boolean;
  photoURL?: string;
  provider?: string;
}
