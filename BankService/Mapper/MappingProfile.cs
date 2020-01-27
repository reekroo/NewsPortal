using AutoMapper;
using BankService.Models;
using System.Linq;
using System.Text.RegularExpressions;

namespace BankService.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Currency, MappedCurrency>()
                .ForMember(x => x.Id, x => x.MapFrom(m => m.Cur_ID))
                .ForMember(x => x.ParentId, x => x.MapFrom(m => m.Cur_ParentID))
                .ForMember(x => x.Code, x => x.MapFrom(m => m.Cur_Code))
                .ForMember(x => x.Abbreviation, x => x.MapFrom(m => m.Cur_Abbreviation))
                .ForMember(x => x.Quote, x=> x.MapFrom(m => Regex
                                                            .Match(m.Cur_QuotName_Eng, @"\d+", RegexOptions.Singleline).Value))
                .ForMember(x => x.Name, x => x.MapFrom(m => Regex
                                                            .Matches(m.Cur_QuotName_Eng, @"\b[^\d\W]+\b", RegexOptions.Multiline)
                                                            .Cast<Match>()
                                                            .Select(c => c.Value)
                                                            .Aggregate((a, b) => a + " " + b)));


            CreateMap<CurrencyRate, MappedCurrencyRate>()
                .ForMember(x => x.Id, x => x.MapFrom(m => m.Cur_ID))
                .ForMember(x => x.Date, x => x.MapFrom(m => m.Date))
                .ForMember(x => x.Abbreviation, x => x.MapFrom(m => m.Cur_Abbreviation))
                .ForMember(x => x.Scale, x => x.MapFrom(m => m.Cur_Scale))
                .ForMember(x => x.Quote, x => x.MapFrom(m => Regex
                                                             .Match(m.Cur_QuotName_Eng, @"\d+", RegexOptions.Singleline).Value))
                .ForMember(x => x.Name, x => x.MapFrom(m => Regex
                                                            .Matches(m.Cur_QuotName_Eng, @"\b[^\d\W]+\b", RegexOptions.Multiline)
                                                            .Cast<Match>()
                                                            .Select(c => c.Value)
                                                            .Aggregate((a, b) => a + " " + b)))
                .ForMember(x => x.OfficialRate, x => x.MapFrom(m => m.Cur_OfficialRate));

            CreateMap<Ingot, MappedIngot>()
                .ForMember(x => x.Id, x => x.MapFrom(m => m.Id))
                .ForMember(x => x.Name, x => x.MapFrom(m => m.NameEng));

            CreateMap<IngotPrice, MappedIngotPrice>();
            CreateMap<RefinancingRate, MappedRefinancingRate>();
        }
    }
}
