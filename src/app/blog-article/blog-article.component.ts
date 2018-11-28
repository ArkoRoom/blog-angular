import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  @Input() articleName: string;
  @Input() articleContent: string;
  @Input() articleLoveIts: number;
  @Input() articleCreatedAt: Date;  

  constructor() { };

  ngOnInit() {
  };

  getArticleLove() {
    return this.articleLoveIts;
  };

  onAddLove() {
    this.articleLoveIts = 1;
    if (this.articleLoveIts >= 0) {
      return 'green';
    };
  };

  onDeleteLove() {
    this.articleLoveIts = -1;
    if (this.articleLoveIts <= 0) {
      return 'red';
    };
  };
};
