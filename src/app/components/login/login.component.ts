import { Component } from '@angular/core';
import {Credentials} from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = ""
  password: string = ""
  remember: boolean = false;


  onSubmit(valid: boolean) {
    // TOUJOURS vérifier la validité avant de faire un traitement
    if(valid) {
      const credential: Credentials = {
        email: this.email,
        password: this.password
      }

      console.log("Credentials : ", credential)
    }
  }

}
