using AutoMapper;

using WorldNewsService.Models;

namespace WorldNewsService.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ChannelSource, MappedChannel>().ForMember(x=> x.Channels,x=> x.MapFrom(m=> m.Sources));
            CreateMap<NewsSource, MappedNews>().ForMember(x => x.News, x => x.MapFrom(m => m.Articles));
        }
    }
}
