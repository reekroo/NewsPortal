using System.Collections.Generic;

namespace WorldNewsService.Models
{
	public class ChannelSource
	{
		public string Status { get; set; }
		public IEnumerable<Channel> Sources { get; set; }
	}
}
