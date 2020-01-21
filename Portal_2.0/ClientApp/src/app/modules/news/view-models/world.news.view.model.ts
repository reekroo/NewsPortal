import { News } from '../../../models/news.model';
import { Channel } from '../../../models/channel.model';

export class WorldNewsViewModel {

  constructor(
    public news?: News[],
    public channels?: Channel[],
    public showError?: boolean
  ) {
    this.showError = false;
  }
}
