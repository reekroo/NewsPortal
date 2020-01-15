using System.Threading.Tasks;
using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using BankService.Models;
using BankService.Const;

using AutoMapper;

namespace BankService.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class IngotPriceController : BaseBankController
	{
		public IngotPriceController(ILogger<IngotPriceController> logger, IMapper mapper) : base(logger, mapper)
		{
		}
		
		[HttpGet("{date}")]
		public async Task<ActionResult> Get(string date) =>
			await GetMappedResult<List<IngotPrice>, List<MappedIngotPrice>>(BankUrls.IngotPrices + "?onDate=" + date);

		[HttpGet("{id:int}/{date}")]
		public async Task<ActionResult> Get(int id, string date) =>
			await GetMappedResult<List<IngotPrice>, List<MappedIngotPrice>>(BankUrls.IngotPrices + id + "?onDate=" + date);
	}
}
