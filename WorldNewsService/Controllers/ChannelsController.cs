using System.Threading.Tasks;

using AutoMapper;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using NewsService.Controllers;
using WorldNewsService.Consts;
using WorldNewsService.Models;

namespace WorldNewsService.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class ChannelsController : BaseNewsController
	{
		public ChannelsController(ILogger<ChannelsController> logger, IMapper mapper) : base(logger, mapper)
		{
		}

		[HttpGet]
		public async Task<ActionResult> Get()
		{
			return await GetMappedResult<ChannelSource, MappedChannel>(NewsUrls.ChannelsUrl);
		}
	}
}
