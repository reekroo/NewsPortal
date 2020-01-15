using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Core.Rss
{
	public static class Rss
	{
		public static async Task<XDocument> GetRssDocAsync(string url)
		{
			byte[] data;

			using (WebClient webClient = new WebClient())
			{
				data = await webClient.DownloadDataTaskAsync(url);
			}

			string str = Encoding.GetEncoding("UTF-8").GetString(data);

			return XDocument.Parse(str);
		}
	}
}
