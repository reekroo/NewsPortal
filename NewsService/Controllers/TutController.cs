using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AutoMapper;

using NewsService.Interfaces;

namespace NewsService.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class TutController : BaseNewsController, INewsController
	{
		public TutController(ILogger<TutController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}

		public TutController(ILogger<INewsController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}
	}
}
