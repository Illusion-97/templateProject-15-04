import { Component } from '@angular/core';
import {Credentials} from "../../models/user";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = ""
  password: string = ""
  remember: boolean = false;

  constructor(private router: Router, private service: AuthService) {
  }

  onSubmit(valid: boolean) {
    // TOUJOURS vérifier la validité avant de faire un traitement
    if(valid) {
      const credential: Credentials = {
        email: this.email,
        password: this.password
      }
      this.service.login(credential).subscribe({
        next: () => {
          this.router.navigate(['/'])
        }
      })
    }
  }

}
