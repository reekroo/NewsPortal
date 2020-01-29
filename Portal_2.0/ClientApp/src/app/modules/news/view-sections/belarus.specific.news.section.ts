import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../../../bases/base.news.component';

import { News } from '../../../models/news.model';

@Component({
  selector: 'belarus-specific-news-section',
  templateUrl: './belarus.specific.news.section.html',
  styleUrls: ['../../../../assets/styles/news/belarus-specific-news-section.less'],
})

export class BelarusSpecificNewsSection extends BaseNewsComponent {

  @Input() title: string;
  @Input() news: News[];
}
