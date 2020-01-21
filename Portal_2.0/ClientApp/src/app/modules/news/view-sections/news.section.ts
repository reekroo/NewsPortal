import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../../../bases/base.news.component';

import { News } from '../../../models/news.model';

@Component({
  selector: 'news-section',
  templateUrl: './news.section.html',
  styleUrls: ['../../../../assets/styles/news/news-section.less'],
})

export class NewsSectionComponent extends BaseNewsComponent {

  @Input() news: News[];
}
