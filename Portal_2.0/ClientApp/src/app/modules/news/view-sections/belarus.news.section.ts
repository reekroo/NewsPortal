import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../../../bases/base.news.component';

import { News } from '../../../models/news.model';

@Component({
  selector: 'belarus-news-section',
  templateUrl: './belarus.news.section.html',
  styleUrls: ['../../../../assets/styles/news/belarus-news-section.less'],
})

export class BelarusNewsSection extends BaseNewsComponent {

  @Input() title: string;
  @Input() news: News[];
}
