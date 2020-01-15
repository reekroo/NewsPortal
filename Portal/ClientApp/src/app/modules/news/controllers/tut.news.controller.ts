import { Component, OnInit } from '@angular/core';

import { TutNewsService } from '../../../services/news/data.news.tut.service';

import { BaseSpecificPortalNewsComponent } from '../../../bases/base.news.specific.portal.component';

@Component({
  templateUrl: '../views/block.news.veiw.html',
  styleUrls: ['../../../../assets/styles/news/news-block-section.less'],
  providers: [TutNewsService]
})

export class TutNewsComponent extends BaseSpecificPortalNewsComponent implements OnInit {

  constructor(specificDataService: TutNewsService) {

    super(specificDataService, "TUT");
  }
}
