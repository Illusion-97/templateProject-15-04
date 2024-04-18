import { Injectable } from '@angular/core';
import {Credentials, User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: Credentials) {
    return this.http.post(`${environment.API_URL}/login`, credentials)
  }

  register(user: User) {
    return this.http.post(`${environment.API_URL}/register`, user)
  }

  logout() {
    this.router.navigate(['/auth/login'])
  }
}
