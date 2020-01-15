using System.Collections.Generic;

namespace WeatherService.Models
{
	public class CityWeather
	{
		public Coord Coord { get; set; }
		public IEnumerable<Weather> Weather { get; set; }
		public string Base { get; set; }
		public Main Main { get; set; }
		public int? Visibility { get; set; }
		public Wind Wind { get; set; }
		public Clouds Clouds { get; set; }
		public double? dt { get; set; }
		public Sys Sys { get; set; }
		public int id { get; set; }
		public string name { get; set; }
		public double cod { get; set; }
		public Dictionary<string, double> Snow { get; set; }
		public Dictionary<string, double> Rain { get; set; }
		public string dt_txt { get; set; }

		public CityWeather()
		{
			Coord = new Coord();
			Wind = new Wind();
			Clouds = new Clouds();
			Main = new Main();
			Sys = new Sys();
			Weather = new List<Weather>();
		}
	}

	public class Wind
	{
		public double? Speed { get; set; }
		public double? Deg { get; set; }
	}

	public class Clouds
	{
		public double? All { get; set; }
	}

	public class Coord
	{
		public double? Lat { get; set; }
		public double? Lon { get; set; }
	}

	public class Rain
	{
		public double? h { get; set; }
	}

	public class Snow
	{
		public double? h { get; set; }
	}

	public class Main
	{
		public double? humidity { get; set; }
		public double? pressure { get; set; }
		public double? temp { get; set; }
		public double? temp_max { get; set; }
		public double? temp_min { get; set; }
		public double? feels_like { get; set; }
	}

	public class Sys
	{
		public string country { get; set; }
		public double? id { get; set; }
		public double? message { get; set; }
		public double? sunrise { get; set; }
		public double? sunset { get; set; }
	}

	public class Weather
	{
		public string description { get; set; }
		public int? id { get; set; }
		public string icon { get; set; }
		public string main { get; set; }
	}
}
