import { Component, OnInit } from '@angular/core';

import { NashaNivaNewsService } from '../../../services/news/data.news.nashaniva.service';

import { BasePortalNewsComponent } from '../../../bases/base.news.portal.component';

@Component({
  templateUrl: '../views/line.news.veiw.html',
  styleUrls: ['../../../../assets/styles/news/news-line-section.less'],
  providers: [NashaNivaNewsService]
})

export class NashaNivaNewsComponent extends BasePortalNewsComponent implements OnInit {

  constructor(dataService: NashaNivaNewsService) {

    super(dataService, "Nasha Niva");
  }
}
