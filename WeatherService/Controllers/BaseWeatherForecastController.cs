using System;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Core.Json;
using AutoMapper;

namespace WeatherService.Controllers
{
	public class BaseWeatherForecastController : ControllerBase
	{
		private readonly ILogger<BaseWeatherForecastController> _logger;
		private readonly IMapper _mapper;

		public BaseWeatherForecastController(ILogger<BaseWeatherForecastController> logger, IMapper mapper)
		{
			_logger = logger;
			_mapper = mapper;
		}

		protected virtual async Task<ActionResult> GetResult<T>(string url)
			where T : class, new()
		{
			try
			{
				var result = await Json.GetJsonResultAsync<T>(url);

				if (result != null)
				{
					return Ok(result);
				}
				return NotFound();
			}
			catch (Exception ex)
			{
				_logger.LogDebug(ex.Message);

				return BadRequest();
			}
		}
		protected virtual async Task<ActionResult> GetMappedResult<T, Y>(string url) 
			where T : class, new()
			where Y : class, new()
		{
			try
			{
				var result = await Json.GetJsonResultAsync<T>(url);
				
				if (result != null)
				{
					return Ok(_mapper.Map<Y>(result));
				}
				return NotFound();
			}
			catch (Exception ex)
			{
				_logger.LogDebug(ex.Message);

				return BadRequest();
			}
		}
	}
}
