using System.Collections.Generic;

namespace WeatherService.Models.Mapped
{
	public class MappedCityForecast
	{
		public City City { get; set; }
		public IEnumerable<MappedCityWeather> WeatherList { get; set; }

		public MappedCityForecast()
		{
			City = new City();
			WeatherList = new List<MappedCityWeather>();
		}
	}
}
