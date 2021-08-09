import { Observable } from 'rxjs';
import { IUser } from '@shared/schemas/user';

export abstract class IAuthService {
  abstract login(): Observable<IUser>;
  abstract logout(): Observable<boolean>;
  abstract isLoggedIn(): Observable<IUser>;
}
