using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AutoMapper;
using System.Threading.Tasks;
using NewsService.Interfaces;

namespace NewsService.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class NashaNivaController : BaseNewsController, INewsController
	{
		public NashaNivaController(ILogger<NashaNivaController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}

		public NashaNivaController(ILogger<INewsController> logger, IMapper mapper, string url) : base(logger, mapper, url)
		{
		}
	}
}
