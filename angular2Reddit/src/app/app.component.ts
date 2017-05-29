import { Component } from '@angular/core';

import { Article }  from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Array<Article>;

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  constructor() {
    this.articles = [
      new Article('bookName1', 'http://baidu.com', 9),
      new Article('bookName2', 'http://baidu.com', 10),
      new Article('bookName3', 'http://baidu.com', 7),
    ];
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
