import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../../../bases/base.news.component';

import { News } from '../../../models/news.model';

@Component({
  selector: 'news-horizontal-oriented-section',
  templateUrl: './news.horizontal.oriented.section.html',
  styleUrls: ['../../../../assets/styles/news/news-horizontal-oriented-section.less'],
})

export class NewsHorizontalOrientedSection extends BaseNewsComponent {

  @Input() news: News[];
}
