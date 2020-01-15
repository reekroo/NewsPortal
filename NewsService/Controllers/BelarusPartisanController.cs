using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AutoMapper;

using NewsService.Interfaces;

namespace NewsService.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class BelarusPartisanController : BaseNewsController, INewsController
	{

		public BelarusPartisanController(ILogger<INewsController> logger, IMapper mapper, string url)
			: base(logger, mapper, url)
		{
		}

		public BelarusPartisanController(ILogger<BelarusPartisanController> logger, IMapper mapper, string url)
			: base(logger, mapper, url)
		{
		}
	}
}
