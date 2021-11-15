import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/types/IUser';

interface ISignInRequest {
  email: string;
  password: string;
}

interface ISignInResponse {
  user: IUser;
  token: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3333/tasks';

  constructor(private http: HttpClient) {}

  public signIn({
    email,
    password,
  }: ISignInRequest): Observable<ISignInResponse> {
    const response = this.http.post<ISignInResponse>('sessions', {
      email,
      password,
    });

    response.subscribe(({ token, user }) => {
      localStorage.setItem('@token', token);
      localStorage.setItem('@user', JSON.stringify(user));
    });

    return response;
  }

  public signUp() {}

  public signOut() {}
}
