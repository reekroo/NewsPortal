import { Component, Input } from '@angular/core';

import { News } from '../../../models/news.model';

@Component({
  selector: 'home-news-section',
  templateUrl: './home.news.section.html'
})

export class HomeNewsComponent {

  @Input() title: string;
  @Input() news: News[];
}
