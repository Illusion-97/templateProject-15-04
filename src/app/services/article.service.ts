import { Injectable } from '@angular/core';
import {Article} from "../models/article";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Article[]> {

    return this.http.get<Article[]>("http://localhost:3000/articles")
  }

  findById(id: number) {
    return this.http.get<Article>("http://localhost:3000/articles/" + id)
  }

  save(article: Article) : Observable<Article> {
    return this.http.post<Article>("http://localhost:3000/articles",article)
  }

  update(article: Article) : Observable<Article>  {
    return this.http.put<Article>("http://localhost:3000/articles/" + article.id,article)
  }

  delete(id: number) {
    return this.http.delete<Article>("http://localhost:3000/articles/" + id)
  }
}
