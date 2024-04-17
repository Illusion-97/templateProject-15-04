import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup = new FormGroup<any>({
    id: new FormControl(0),
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("")
  })

  onSubmit() {
    // TOUJOURS vérifier la validité avant tout traitement
    if(this.form.valid) {
      console.log("User", this.form.value)
    }
  }
}
