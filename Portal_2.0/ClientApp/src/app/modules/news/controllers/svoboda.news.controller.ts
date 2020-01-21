import { Component, OnInit } from '@angular/core';

import { SvobodaNewsService } from '../../../services/news/data.news.svoboda.service';

import { BaseSpecificPortalNewsComponent } from '../../../bases/base.news.specific.portal.component';

@Component({
  templateUrl: '../views/block.news.veiw.html',
  styleUrls: ['../../../../assets/styles/news/news-block-section.less'],
  providers: [SvobodaNewsService]
})

export class SvobodaNewsComponent extends BaseSpecificPortalNewsComponent implements OnInit {

  constructor(specificDataService: SvobodaNewsService) {

    super(specificDataService, "Radio Svoboda");
  }
}
