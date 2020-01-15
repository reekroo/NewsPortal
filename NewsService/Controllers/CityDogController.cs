using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AutoMapper;
using System.Threading.Tasks;
using NewsService.Interfaces;

namespace NewsService.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class CityDogController : BaseNewsController, INewsController
	{
		public CityDogController(ILogger<CityDogController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}

		public CityDogController(ILogger<INewsController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}
	}
}
