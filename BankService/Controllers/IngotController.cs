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
	public class IngotController : BaseBankController
	{
		public IngotController(ILogger<IngotController> logger, IMapper mapper) : base(logger, mapper)
		{
		}

		[HttpGet]
		public async Task<ActionResult> Get() => await GetMappedResult<List<Ingot>, List<MappedIngot>>(BankUrls.Ingots);

		[HttpGet("{id:int}")]
		public async Task<ActionResult> Get(int id) => await GetMappedResult<Ingot, MappedIngot>(BankUrls.Ingots + id);
	}
}
