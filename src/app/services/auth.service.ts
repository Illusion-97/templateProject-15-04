import { Injectable } from '@angular/core';
import {Credentials, User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: Credentials) {

  }

  register(user: User) {

  }

  logout() {

  }
}
