using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using WorldNewsService.Consts;
using NewsService.Controllers;
using WorldNewsService.Models;

using AutoMapper;

namespace WorldNewsService.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class NewsController : BaseNewsController
	{
		public NewsController(ILogger<NewsController> logger, IMapper mapper) : base(logger, mapper)
		{
		}
		
		[HttpGet("{id}")]
		public async Task<ActionResult> Get(string id)
		{
			return await GetMappedResult<NewsSource, MappedNews>(NewsUrls.NewsUrl + id);
		}
	}
}
