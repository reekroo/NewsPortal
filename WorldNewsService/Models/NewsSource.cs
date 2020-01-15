using System.Collections.Generic;

namespace WorldNewsService.Models
{
	public class NewsSource
	{
		public string Status { get; set; }
		public string TotalResults { get; set; }
		public IEnumerable<Article> Articles { get; set; }
	}
}
