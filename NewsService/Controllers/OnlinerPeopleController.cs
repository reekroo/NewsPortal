using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using NewsService.Interfaces;

namespace NewsService.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class OnlinerPeopleController : BaseNewsController
	{
		public OnlinerPeopleController(ILogger<OnlinerPeopleController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}

		public OnlinerPeopleController(ILogger<INewsController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}
	}
}