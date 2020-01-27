export class CurrencyRate {
  constructor(
    public id?: number,
    public date?: string,
    public abbreviation?: string,
    public scale?: string,
    public name?: string,
    public officialRate?: number
  ) { }
}
