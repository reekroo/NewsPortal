import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../../../bases/base.news.component';

import { News } from '../../../models/news.model';

@Component({
  selector: 'specific-news-section',
  templateUrl: './news.specific.section.html',
  styleUrls: ['../../../../assets/styles/news/specific-news-section.less'],
})

export class SpecificNewsSectionComponent extends BaseNewsComponent {

  @Input() news: News[];
}
