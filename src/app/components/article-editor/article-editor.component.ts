import { Component } from '@angular/core';
import {AbstractFormComponent} from "../../models/abstract-form-component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ArticleService} from "../../services/article.service";
import {Observable} from "rxjs";

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

  constructor(route: ActivatedRoute, private service: ArticleService, private router: Router) {
    super();

    const paramMapSnapshot: ParamMap = route.snapshot.paramMap;
    console.log(paramMapSnapshot.get('id'))

    const paramMapObservable: Observable<ParamMap> = route.paramMap;
    paramMapObservable.subscribe(map => console.log("Observable id :", map.get('id')))
  }

  onSubmit$() {
    this.service.save(this.form.value).subscribe({
      next: value => { // Indique quoi faire quand tout se passe bien et qu'on récupère le résultat attendu
        console.log("New Id:", value.id)
        this.router.navigate(['/'])
      },
      error: err => { // Indiquer quoi faire s'il y a un problème à la récupération de la réponse
        console.log("Error",err)
      }
    })
  }
}
