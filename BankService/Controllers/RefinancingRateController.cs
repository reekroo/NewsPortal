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
	public class RefinancingRateController : BaseBankController
	{
		public RefinancingRateController(ILogger<RefinancingRateController> logger, IMapper mapper) : base(logger, mapper)
		{
		}

		[HttpGet]
		public async Task<ActionResult> Get() =>
			await GetMappedResult<List<RefinancingRate>, List<MappedRefinancingRate>>(BankUrls.RefinancingRate);

		[HttpGet("{date}")]
		public async Task<ActionResult> Get(string date) =>
			await GetMappedResult<List<RefinancingRate>, List<MappedRefinancingRate>>(BankUrls.RefinancingRate + "?onDate=" + date);
	}
}
