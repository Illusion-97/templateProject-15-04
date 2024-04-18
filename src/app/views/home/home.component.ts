import { Component } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../models/article";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // articles: Observable<Article[]>;
  articles: Observable<Article[]> = of([])

  constructor(protected service: ArticleService) {
    //this.articles = service.findAll()
    this.getAll()
  }

  getAll() {
    this.articles = this.service.findAll()
  }

  delete(id: number) {
    this.service.delete(id).subscribe({
      next: () => this.getAll()
    })
  }
}
