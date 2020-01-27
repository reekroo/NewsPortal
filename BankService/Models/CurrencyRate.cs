namespace BankService.Models
{
	public class CurrencyRate
    {
        public int Cur_ID { get; set; }
        public string Date { get; set; }
        public string Cur_Abbreviation { get; set; }
        public string Cur_Scale { get; set; }
        public string Cur_QuotName { get; set; }
        public string Cur_QuotName_Eng { get; set; }
        public double Cur_OfficialRate { get; set; }
    }
}
