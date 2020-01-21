import { Component, OnInit } from '@angular/core';

import { BelarusPartisanNewsService } from '../../../services/news/data.news.belaruspartisan.service';

import { BasePortalNewsComponent } from '../../../bases/base.news.portal.component';

@Component({
  templateUrl: '../views/line.news.veiw.html',
  styleUrls: ['../../../../assets/styles/news/news-line-section.less'],
  providers: [BelarusPartisanNewsService]
})

export class BelarusPartisanNewsComponent extends BasePortalNewsComponent implements OnInit {

  constructor(dataService: BelarusPartisanNewsService) {

    super(dataService, "Belarus Partisan");
  }
}
