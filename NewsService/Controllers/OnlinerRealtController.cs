using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using NewsService.Interfaces;

namespace NewsService.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class OnlinerRealtController : BaseNewsController
	{
		public OnlinerRealtController(ILogger<OnlinerRealtController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}

		public OnlinerRealtController(ILogger<INewsController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}
	}
}
