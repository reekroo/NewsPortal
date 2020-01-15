namespace BankService.Models
{
	public class MappedCurrency
	{
		public int Id { get; set; }
		public int ParentId { get; set; }
		public int Code{ get; set; }
		public string Abbreviation { get; set; }
		public int Quote { get; set; }
		public string Name{ get; set; }
	}
}
