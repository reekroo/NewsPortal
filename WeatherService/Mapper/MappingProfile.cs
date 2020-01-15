using System;

using AutoMapper;

using WeatherService.Models;
using WeatherService.Models.Mapped;

namespace WeatherService.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<CityWeather, MappedCityWeather>()
                .ForMember(x => x.Id, x => x.MapFrom(m => m.id))
                .ForMember(x => x.Name, x => x.MapFrom(m => m.name))
                .ForMember(x => x.Coordinates, x => x.MapFrom(m => m.Coord))
                .ForMember(x => x.Weather, x => x.MapFrom(m => m.Weather))
                .ForMember(x => x.Wind, x => x.MapFrom(m => m.Wind))
                .ForMember(x => x.Clouds, x => x.MapFrom(m => m.Clouds))
                .ForMember(x => x.Snow, x => x.MapFrom(m => m.Snow))
                .ForMember(x => x.Rain, x => x.MapFrom(m => m.Rain))
                .ForMember(x => x.Date, x => x.MapFrom(m => DateTimeOffset.FromUnixTimeSeconds(m.dt != null ? (int)m.dt : int.Parse(m.dt_txt))))
                .ForPath(x => x.RootInfo.Humidity, x => x.MapFrom(m => m.Main.humidity))
                .ForPath(x => x.RootInfo.Pressure, x => x.MapFrom(m => m.Main.pressure))
                .ForPath(x => x.RootInfo.Temperature, x => x.MapFrom(m => m.Main.temp))
                .ForPath(x => x.RootInfo.TemperatureMax, x => x.MapFrom(m => m.Main.temp_max))
                .ForPath(x => x.RootInfo.TemperatureMin, x => x.MapFrom(m => m.Main.temp_min))
                .ForPath(x => x.RootInfo.TemperatureFeelsLike, x => x.MapFrom(m => m.Main.feels_like))
                .ForPath(x => x.RootInfo.Sunrise, x => x.MapFrom(m => m.Sys.sunrise))
                .ForPath(x => x.RootInfo.Sunset, x => x.MapFrom(m => m.Sys.sunset));

            CreateMap<CityForecast, MappedCityForecast>()
                .ForMember(x => x.City, x => x.MapFrom(m => m.City))
                .ForMember(x => x.WeatherList, x => x.MapFrom(m => m.List));
        }
    }
}
