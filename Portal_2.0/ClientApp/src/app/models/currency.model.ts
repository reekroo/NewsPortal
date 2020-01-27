export class Currency {
  constructor(
    public id?: number,
    public parentId?: number,
    public code?: string,
    public abbreviation?: string,
    public quote?: string,
    public name?: string,
  ) { }
}
