using System;

namespace BankService.Models
{
	public class IngotPrice
	{
		public string Date { get; set; }
		public int? MetalID { get; set; }
		public double? NoCertificateDollars { get; set; }
		public double? NoCertificateRubles { get; set; }
		public double? CertificateDollars { get; set; }
		public double? CertificateRubles { get; set; }
		public double? BanksDollars { get; set; }
		public double? BanksRubles { get; set; }
		public double? EntitiesDollars { get; set; }
		public double? EntitiesRubles { get; set; }
		public string Name { get; set; }
		public double? Nominal { get; set; }
	}
}
