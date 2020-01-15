using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AutoMapper;

using System.Threading.Tasks;
using Core.Json;
using System;

namespace NewsService.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class BaseNewsController : ControllerBase
	{
		private readonly ILogger<BaseNewsController> _logger;
		private readonly IMapper _mapper;
		
		public BaseNewsController(ILogger<BaseNewsController> logger, IMapper mapper)
		{
			_logger = logger;
			_mapper = mapper;
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
