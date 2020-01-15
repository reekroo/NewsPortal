using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AutoMapper;

using NewsService.Interfaces;

namespace NewsService.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class SvobodaController : BaseNewsController, INewsController
	{
		public SvobodaController(ILogger<SvobodaController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}

		public SvobodaController(ILogger<INewsController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}
	}
}
