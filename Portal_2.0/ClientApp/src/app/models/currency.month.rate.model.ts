export class CurrencyMonthRate {
  constructor(
    public date?: string,
    public scale?: string,
    public officialRate?: number,
    public delta?: number
  ) { }
}
