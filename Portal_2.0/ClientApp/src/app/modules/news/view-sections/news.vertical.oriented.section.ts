import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../../../bases/base.news.component';

import { News } from '../../../models/news.model';

@Component({
  selector: 'news-vertical-oriented-section',
  templateUrl: './news.vertical.oriented.section.html',
  styleUrls: ['../../../../assets/styles/news/news-vertical-oriented-section.less'],
})

export class NewsVerticalOrientedSection extends BaseNewsComponent {

  @Input() news: News[];
}
