import { Observable } from 'rxjs';
import { IUser } from '@shared/schemas/user';

export abstract class AuthAbstractService {
  abstract login(): Observable<IUser>;
  abstract logout(): Observable<boolean>;
  abstract isLoggedIn(): Observable<IUser>;
}
