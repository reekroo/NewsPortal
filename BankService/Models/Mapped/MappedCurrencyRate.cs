using System;

namespace BankService.Models
{
	public class MappedCurrencyRate
    {
        public int Id { get; set; }
        public string Date { get; set; }
        public string Abbreviation { get; set; }
        public string Scale { get; set; }
        public string Name { get; set; }
        public double Quote { get; set; }
        public double OfficialRate { get; set; }
    }
}
