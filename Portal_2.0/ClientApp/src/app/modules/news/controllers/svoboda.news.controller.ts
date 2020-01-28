import { Component, OnInit } from '@angular/core';

import { BelarusNewsService } from '../../../services/news/data.belarus.news.service';

import { BaseSpecificPortalNewsComponent } from '../../../bases/base.news.specific.portal.component';
import { BelarusNews } from '../../../enums/belarus.news.enum';

@Component({
  templateUrl: '../views/block.news.veiw.html',
  styleUrls: ['../../../../assets/styles/news/news-block-section.less'],
  providers: [BelarusNewsService]
})

export class SvobodaNewsComponent extends BaseSpecificPortalNewsComponent implements OnInit {

  constructor(specificDataService: BelarusNewsService) {

    super(specificDataService, BelarusNews.Svoboda, "Radio Svoboda");
  }
}
