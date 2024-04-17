import { Component } from '@angular/core';
import {AbstractFormComponent} from "../../models/abstract-form-component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent extends AbstractFormComponent {

  form: FormGroup = new FormGroup<any>({
    id: new FormControl(0),
    src: new FormControl(""),
    alt: new FormControl("", {validators: [Validators.required]}),
    titre: new FormControl("", {validators: [Validators.required]}),
    description: new FormControl("", {validators: [Validators.required]}),
    lien: new FormControl("", {validators: [Validators.required]})
  })

  constructor(route: ActivatedRoute) {
    super();
    console.log(route.snapshot.paramMap.get('id'))
    route.paramMap.subscribe(map => console.log("Observable id :", map.get('id')))
  }

  onSubmit$() {
    console.log("Article", this.form.value)
  }
}
