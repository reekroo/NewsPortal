using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AutoMapper;

using WeatherService.Models;
using WeatherService.Models.Mapped;
using WeatherService.Const;

namespace WeatherService.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class ForecastController : BaseWeatherForecastController
	{
		public ForecastController(ILogger<ForecastController> logger, IMapper mapper) : base(logger, mapper)
		{
		}

		[HttpGet("{city}/{countryCode}")]
		public async Task<ActionResult> Get(string city, string countryCode) => 
			await GetMappedResult<CityForecast, MappedCityForecast>(string.Format("{0}&q={1},{2}", WeatherUrls.Forecast, city, countryCode));

		[HttpGet("{lat:int}/{lon:int}")]
		public async Task<ActionResult> Get(int lat, int lon) => 
			await GetMappedResult<CityForecast, MappedCityForecast>(string.Format("{0}&lat={1}&lon={2}", WeatherUrls.Forecast, lat, lon));
	}
}
