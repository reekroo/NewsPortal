export class IngotPrice {
  constructor(
    public date?: string,
    public metalId?: number,
    public name?: string,
    public nominal?: number,
    public certificateRubles?: number,
    public banksRubles?: number,
    public entitiesRubles?: number
  ) { }

  public getOneGramRate() {

    return (this.entitiesRubles);
  }
}
