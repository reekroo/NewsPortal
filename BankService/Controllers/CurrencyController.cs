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
	public class CurrencyController : BaseBankController
	{
		public CurrencyController(ILogger<CurrencyController> logger, IMapper mapper) : base(logger, mapper)
		{
		}

		[HttpGet]
		public async Task<ActionResult> Get() =>
			await GetMappedResult<List<Currency>, List<MappedCurrency>>(BankUrls.Currencies);

		[HttpGet("{id:int}")]
		public async Task<ActionResult> Get(int id) => 
			await GetMappedResult<CurrencyRate, MappedCurrencyRate>(BankUrls.CurrencyRate + id + "?ParamMode=0");

		[HttpGet("{id:int}/{start}/{end}")]
		public async Task<ActionResult> Get(int id, string start, string end) =>
			await GetMappedResult<List<CurrencyRate>, List<MappedCurrencyRate>>(BankUrls.CurrencyDynamicRate + id + "?startDate=" + start + "&endDate=" + end);

		[HttpGet("{id:int}/{date}")]
		public async Task<ActionResult> Get(int id, string date) =>
			await GetMappedResult<CurrencyRate, MappedCurrencyRate>(BankUrls.CurrencyRate + id + "?ParamMode=0&onDate=" + date);
	}
}
