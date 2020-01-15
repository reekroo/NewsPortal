using System;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Core.Json;
using AutoMapper;
using System.Collections.Generic;

namespace BankService.Controllers
{
	public class BaseBankController : ControllerBase
	{
		private readonly ILogger<BaseBankController> _logger;
		private readonly IMapper _mapper;

		public BaseBankController(ILogger<BaseBankController> logger, IMapper mapper)
		{
			_logger = logger;
			_mapper = mapper;
		}

		protected virtual async Task<ActionResult> GetResult<T>(string url)
			where T : class
		{
			try
			{
				var result = await Json.GetJsonResultAsync<List<T>>(url);

				if (result.Count() > 0)
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
