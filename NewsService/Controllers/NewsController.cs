using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AutoMapper;

using NewsService.Interfaces;
using NewsService.Const;

namespace NewsService.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class NewsController : ControllerBase, INewsController
	{
		private readonly ILogger<NewsController> _logger;
		private readonly IMapper _mapper;

		public NewsController(ILogger<NewsController> logger, IMapper mapper)
		{
			_logger = logger;
			_mapper = mapper;
		}

		[HttpGet("{portal}")]
		public async Task<ActionResult> Get(string portal)
		{
			switch (portal.ToLower())
			{
				case ("belaruspartisan"):
					return await new BelarusPartisanController(_logger, _mapper, NewsUrls.BelarusPartisan).Get();
				case ("belsat"):
					return await new BelsatController(_logger, _mapper, NewsUrls.Belsat).Get();
				case ("citydog"):
					return await new CityDogController(_logger, _mapper, NewsUrls.CityDog).Get();
				case ("nashaniva"):
					return await new NashaNivaController(_logger, _mapper, NewsUrls.NashaNiva).Get();
				case ("svoboda"):
					return await new SvobodaController(_logger, _mapper, NewsUrls.Svoboda).Get();
				case ("tut"):
					return await new TutController(_logger, _mapper, NewsUrls.Tut).Get();
				case ("onlinerauto"):
				case ("auto"):
					return await new OnlinerAutoController(_logger, _mapper, NewsUrls.OnlinerAuto).Get();
				case ("onlinerpeople"):
				case ("people"):
					return await new OnlinerPeopleController(_logger, _mapper, NewsUrls.OnlinerPeople).Get();
				case ("onlinerrealt"):
				case ("realt"):
					return await new OnlinerRealtController(_logger, _mapper, NewsUrls.OnlinerRealt).Get();
				case ("onlinertech"):
				case ("tech"):
					return await new OnlinerTechController(_logger, _mapper, NewsUrls.OnlinerTech).Get();
				default:
					break;
			}

			return NotFound();
		}
		
		public async Task<ActionResult> Get() => await Get("tut");
	}
}
