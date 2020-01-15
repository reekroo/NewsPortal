using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using NewsService.Interfaces;

namespace NewsService.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class OnlinerAutoController : BaseNewsController
	{
		public OnlinerAutoController(ILogger<BelarusPartisanController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}

		public OnlinerAutoController(ILogger<INewsController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}
	}
}
