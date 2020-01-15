export class Currency {
  constructor(
    public Id?: number,
    public ParentId?: number,
    public Code?: string,
    public Abbreviation?: string,
    public Quote?: string,
    public Name?: string,
  ) { }
}
