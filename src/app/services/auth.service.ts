
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = environment.API;

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  /**
   * this is used to clear anything that needs to be removed
   */
  clear(): void {
    localStorage.clear();
  }

  /**
   * check for expiration and if token is still existing or not
   */
  async isAuthenticated() {
    const isLoggedIn = false;
    const token = localStorage.getItem('token');
    if (!token) {
      return isLoggedIn;
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    const req: any = await this.httpClient
      .get(`${this.api}/auth/isloggedin`, { headers })
      .toPromise()
      .catch(e => console.error('AuthErr', e));
    return req?.isloggedin || isLoggedIn;
  }

  login(user: any): void {

    this.httpClient.post(`${this.api}/auth/login`, { ...user }).subscribe(
      (event: { access_token: string }) => {
        localStorage.setItem('token', event.access_token);
        this.router.navigate(['/dashboard']);
      },
      error => console.error(error)
    );
  }

  /**
   * this is used to clear local storage and also the route to login
   */
  logout(): void {
    this.clear();
    this.router.navigate(['/login']);
  }

  decode() {
    return decode(localStorage.getItem('token'));
  }

}
