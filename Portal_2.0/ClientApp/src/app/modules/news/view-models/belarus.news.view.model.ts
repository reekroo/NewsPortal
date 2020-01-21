import { News } from '../../../models/news.model';

export class BelarusNewsViewModel {

  constructor(
    public onlinerNews?: News[],
    public cityDogNews?: News[],
    public tutNews?: News[],
    public belarusPartisanNews?: News[],
    public nashaNivaNews?: News[],
    public belsatNews?: News[],
    public svobodaNews?: News[]
  ) { }
}
