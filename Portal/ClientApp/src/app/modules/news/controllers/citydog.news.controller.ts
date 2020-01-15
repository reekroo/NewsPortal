import { Component, OnInit } from '@angular/core';

import { CityDogNewsService } from '../../../services/news/data.news.citydog.service';

import { BasePortalNewsComponent } from '../../../bases/base.news.portal.component';

@Component({
  templateUrl: '../views/line.news.veiw.html',
  styleUrls: ['../../../../assets/styles/news/news-line-section.less'],
  providers: [CityDogNewsService]
})

export class CityDogNewsComponent extends BasePortalNewsComponent implements OnInit {

  constructor(specificDataService: CityDogNewsService) {

    super(specificDataService, "City Dog");
  }
}
