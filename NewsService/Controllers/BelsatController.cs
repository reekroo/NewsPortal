using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AutoMapper;
using System.Threading.Tasks;
using NewsService.Interfaces;

namespace NewsService.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class BelsatController : BaseNewsController, INewsController
	{
		public BelsatController(ILogger<BelsatController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}

		public BelsatController(ILogger<INewsController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}
	}
}
