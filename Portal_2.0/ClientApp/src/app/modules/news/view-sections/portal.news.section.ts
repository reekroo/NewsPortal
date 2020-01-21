import { Component, Input } from '@angular/core';

import { BaseNewsComponent } from '../../../bases/base.news.component';

import { News } from '../../../models/news.model';

@Component({
  selector: 'onliner-news-section',
  templateUrl: './portal.news.section.html',
  styleUrls: ['../../../../assets/styles/news/portal-news-section.less']
})

export class OnlinerNewsSectionComponent extends BaseNewsComponent {

  @Input() title: string;
  @Input() news: { items: News[]; }[] = [];

  section: boolean = false;
  textBtn: string = "Show more news";

  onClick() {
    this.section = !this.section;
    this.textBtn = this.section ? "Hide" : "Show more news";
  }

  scroll(el: any) {
    //el.scrollIntoView();
    setTimeout(() => {
      //behavior: 'smooth', block: 'start', inline: 'end'
      el.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
