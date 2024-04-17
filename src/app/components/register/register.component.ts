import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AbstractFormComponent} from "../../models/abstract-form-component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends AbstractFormComponent {
  form: FormGroup = new FormGroup<any>({
    id: new FormControl(0),
    username: new FormControl("", {validators: [Validators.required]}),
    email: new FormControl("", {validators: [Validators.email, Validators.required]}),
    password: new FormControl("", {validators: [Validators.required, Validators.minLength(8)]})
  })

  onSubmit$() {
      console.log("User", this.form.value)
  }
}
