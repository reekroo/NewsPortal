import { Component, OnInit } from '@angular/core';

import { BelarusNewsService } from '../../../services/news/data.belarus.news.service';
import { BelarusNews } from '../../../enums/belarus.news.enum';

import { BasePortalNewsComponent } from '../../../bases/base.news.portal.component';

@Component({
  templateUrl: '../views/line.news.veiw.html',
  styleUrls: ['../../../../assets/styles/news/news-line-section.less'],
  providers: [BelarusNewsService]
})

export class BelarusPartisanNewsComponent extends BasePortalNewsComponent implements OnInit {

  constructor(dataService: BelarusNewsService) {

    super(dataService, BelarusNews.BelarusPartisan, "Belarus Partisan");
  }
}
