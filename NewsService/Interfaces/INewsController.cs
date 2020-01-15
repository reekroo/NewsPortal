using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace NewsService.Interfaces
{
	public interface INewsController
	{
		Task<ActionResult> Get();
	}
}
