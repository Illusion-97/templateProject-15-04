import { Injectable } from '@angular/core';
import {Article} from "../models/article";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  findAll(): Article[] {
    return []
  }

  findById() {

  }

  save(article: Article) {

  }

  update() {

  }

  delete() {

  }
}
