using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using NewsService.Interfaces;

namespace NewsService.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class OnlinerTechController : BaseNewsController
	{
		public OnlinerTechController(ILogger<OnlinerTechController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}

		public OnlinerTechController(ILogger<INewsController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}
	}
}
