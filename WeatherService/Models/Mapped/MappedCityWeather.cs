using System;
using System.Collections.Generic;

namespace WeatherService.Models.Mapped
{
	public class MappedCityWeather
	{
		public IEnumerable<Weather> Weather { get; set; }
		public Coord Coordinates { get; set; }
		public Wind Wind { get; set; }
		public Clouds Clouds { get; set; }
		public Dictionary<string, double> Snow { get; set; }
		public Dictionary<string, double> Rain { get; set; }
		public RootCityWeatherInformation RootInfo { get; set; }
		public string Name { get; set; }
		public DateTimeOffset Date { get; set; }
		public int Id { get; set; }

		public MappedCityWeather()
		{
			Coordinates = new Coord();
			RootInfo = new RootCityWeatherInformation();
			Wind = new Wind();
			Clouds = new Clouds();
			Weather = new List<Weather>();
		}
	}

	public class RootCityWeatherInformation
	{
		public double? Humidity { get; set; }
		public double? Pressure { get; set; }
		public double? Temperature { get; set; }
		public double? TemperatureMax { get; set; }
		public double? TemperatureMin { get; set; }
		public double? TemperatureFeelsLike { get; set; }
		public double? Sunrise { get; set; }
		public double? Sunset { get; set; }

	}
}
