import { Component, OnInit } from '@angular/core';

import { BaseNewsComponent } from '../../../bases/base.news.component';

import { NewsService } from '../../../services/news/data.news.service';

import { News } from '../../../models/news.model';
import { Channel } from '../../../models/channel.model';
import { WorldNewsViewModel } from '../view-models/world.news.view.model';

@Component({
  templateUrl: './world.news.component.html',
  styleUrls: ['../../../../assets/styles/news/news.less'],
  providers: [NewsService]
})

export class NewsComponent extends BaseNewsComponent implements OnInit {

  worldNewsViewModel: WorldNewsViewModel = new WorldNewsViewModel();

  constructor(private dataService: NewsService) {
    super();
  }

  ngOnInit() {

    this.getChannels();
    this.getNews();
  }

  getNews() {

    this.dataService.getNews().subscribe((data: any) => {

      if (data.articles) {

        this.worldNewsViewModel.news = data.articles as News[];
      } else {

        this.worldNewsViewModel.news = [];
      }

      this.error();
    });
  }

  getNewsById(id: string) {

    this.dataService.getNewsById(id).subscribe(
      response => {

        if (response.hasOwnProperty("articles")) {

          this.worldNewsViewModel.news = response['articles'] as News[];
        } else {

          this.worldNewsViewModel.news = [];
        }

        this.error();
      },
      err => {
        this.worldNewsViewModel.news = [];

        this.error();
      }
    )
  }

  getChannels() {

    this.dataService.getChannels().subscribe((data: any) => {

      if (data.sources) {

        this.worldNewsViewModel.channels = data.sources as Channel[];
      } else {

        this.worldNewsViewModel.channels = [];
      }

    });
  }

  private error() {

    if (this.worldNewsViewModel.news.length > 0) {

      this.worldNewsViewModel.showError = false;
    } else {

      this.worldNewsViewModel.showError = true;
    }
  }
}
