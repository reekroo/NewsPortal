using System;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AutoMapper;
using Core.Rss;

using NewsService.Interfaces;
using NewsService.Models;
using System.Collections.Generic;
using System.Linq;

namespace NewsService.Controllers
{
	public class BaseNewsController : ControllerBase, INewsController
	{
		private readonly ILogger<INewsController> _logger;
		private readonly IMapper _mapper;
		private readonly string _url;

		public ILogger<INewsController> Logger => _logger;
		public IMapper Mapper => _mapper;
		public string NewsUrl => _url;

		public BaseNewsController(ILogger<INewsController> logger, IMapper mapper)
			: this(logger, mapper, string.Empty)
		{
		}

		public BaseNewsController(ILogger<INewsController> logger, IMapper mapper, string url)
		{
			_logger = logger;
			_mapper = mapper;
			_url = url;
		}

		public virtual async Task<ActionResult> Get() => await GetResult(_url);

		protected virtual async Task<ActionResult> GetResult(string url)
		{
			try
			{
				var result = RssParser.GetNews(await Rss.GetRssDocAsync(url));

				if (result != null)
				{
					return Ok(_mapper.Map<List<News>>(result.ToList()));
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
