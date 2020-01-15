using Newtonsoft.Json;

using System.Net;
using System.Threading.Tasks;

namespace Core.Json
{
	public static class Json
	{
		public static async Task<T> GetJsonResultAsync<T>(string url)
			where T : class, new()
		{
			var result = new T();

			using (var webClient = new WebClient())
			{
				var json = await webClient.DownloadStringTaskAsync(url);

				result = JsonConvert.DeserializeObject<T>(json);
			}

			return result;
		}
	}
}
