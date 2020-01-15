using AutoMapper;
using System.Collections.Generic;

namespace NewsService.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Core.Models.News, NewsService.Models.News>()
                .ForMember(x => x.Description, x => x.MapFrom(m => m.Description))
                .ForMember(x => x.PublishedAt, x => x.MapFrom(m => m.PublishedAt))
                .ForMember(x => x.Title, x => x.MapFrom(m => m.Title))
                .ForMember(x => x.Url, x => x.MapFrom(m => m.Url))
                .ForMember(x => x.UrlToImage, x => x.MapFrom(m => m.UrlToImage));
        }
    }
}
