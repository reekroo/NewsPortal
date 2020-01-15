using System.Collections.Generic;

namespace WeatherService.Models
{
	public class CityForecast
	{
		public City City { get; set; }
		public int? Cnt { get; set; }
		public string Cod { get; set; }
		public int? Message { get; set; }
		public IEnumerable<CityWeather> List{ get; set; }

		public CityForecast()
		{
			City = new City();
			List = new List<CityWeather>();
		}
	}

	public class City
	{
		public Coord Coord { get; set; }
		public string Country { get; set; }
		public int? Id { get; set; }
		public string Name { get; set; }
		public int? Cod { get; set; }

		public City()
		{
			Coord = new Coord();
		}
	}
}
