import { Injectable } from '@angular/core';
import {AuthResponse, Credentials, User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {BehaviorSubject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authResponse: BehaviorSubject<AuthResponse | undefined> = new BehaviorSubject<AuthResponse | undefined>(undefined)

  get currentUser() {
    return this.authResponse.value?.user
  }

  get token() {
    return this.authResponse.value?.accessToken
  }

  get isLogged() {
    return !!this.authResponse.value
  }


  constructor(private http: HttpClient, private router: Router) {

    this.authResponse.subscribe({
      next: value => {
        if(value) {
          sessionStorage.setItem("AUTH_RESPONSE", JSON.stringify(value))
        }
        else {
          sessionStorage.clear()
        }
      }
    })
  }

  login(credentials: Credentials) {
    return this.http.post<AuthResponse>(`${environment.API_URL}/login`, credentials)
      // .pipe() permet d'effectuer des opérations intermédiaires avant souscription (voir doc RxJs)
      .pipe(
        // tap() permet de lire le retour de l'observable et l'utiliser sans modifier le comportement ultérieur
        tap(response => this.authResponse.next(response))
      )
  }

  register(user: User) {
    return this.http.post(`${environment.API_URL}/register`, user)
  }

  logout() {
    this.authResponse.next(undefined)
    this.router.navigate(['/auth/login'])
  }
}
