import { Component, OnInit } from '@angular/core';

import { BelsatNewsService } from '../../../services/news/data.news.belsat.service';

import { BasePortalNewsComponent } from '../../../bases/base.news.portal.component';

@Component({
  templateUrl: '../views/line.news.veiw.html',
  styleUrls: ['../../../../assets/styles/news/news-line-section.less'],
  providers: [BelsatNewsService]
})

export class BelsatNewsComponent extends BasePortalNewsComponent implements OnInit {

  constructor(dataService: BelsatNewsService) {

    super(dataService, "Belsat");
  }
}
