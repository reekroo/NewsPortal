import { Component, OnInit } from '@angular/core';

import { BaseNewsComponent } from '../../../bases/base.news.component';

import { WorldNewsService } from '../../../services/news/data.world.news.service';

import { News } from '../../../models/news.model';
import { Channel } from '../../../models/channel.model';
import { WorldNewsViewModel } from '../view-models/world.news.view.model';

@Component({
  templateUrl: './world.news.component.html',
  styleUrls: ['../../../../assets/styles/news/news.less'],
  providers: [WorldNewsService]
})

export class WorldNewsComponent extends BaseNewsComponent implements OnInit {

  worldNewsViewModel: WorldNewsViewModel = new WorldNewsViewModel();

  constructor(private dataService: WorldNewsService) {
    super();
  }

  ngOnInit() {

    this.getChannels();
    this.getNews('bbc-news');
  }
  
  getNews(id: string) {

    this.dataService.getNews(id).subscribe((data: any) => {

      if (data.news) {

        this.worldNewsViewModel.news = data.news as News[];
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

      if (data.channels) {

        this.worldNewsViewModel.channels = data.channels as Channel[];
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
