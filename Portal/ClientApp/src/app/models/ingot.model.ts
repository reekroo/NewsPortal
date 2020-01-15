export class Ingot {
  constructor(
    public Date?: string,
    public MetalId?: number,
    public Name?: string,
    public Nominal?: number,
    public CertificateRubles?: number,
    public BanksRubles?: number,
    public EntitiesRubles?: number
  ) { }

  public getOneGramRate() {

    return (this.EntitiesRubles);
  }
}
