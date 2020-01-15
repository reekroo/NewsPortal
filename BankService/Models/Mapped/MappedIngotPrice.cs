using System;

namespace BankService.Models
{
	public class MappedIngotPrice
	{
		public string Date { get; set; }
		public int? MetalId { get; set; }
		public string Name { get; set; }
		public double? Nominal { get; set; }
		public double? CertificateRubles { get; set; }
		public double? BanksRubles { get; set; }
		public double? EntitiesRubles { get; set; }
	}
}
