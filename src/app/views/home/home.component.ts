import { Component } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../models/article";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  articles: Article[] = []

  constructor(private service: ArticleService) {
  }

  getAll() {
    //this.articles = this.service.findAll()
  }
}
