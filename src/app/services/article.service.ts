import { Injectable } from '@angular/core';
import {Article} from "../models/article";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {AbstractService} from "./abstract.service";

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends AbstractService<Article> {

  END_POINT = `${environment.API_URL}/articles`

  constructor(http: HttpClient) {
    super(http)
  }

  override update(article: Article) : Observable<Article>  {
    return this.http.put<Article>(`${this.END_POINT}/${article.id}`,article)
  }

}
