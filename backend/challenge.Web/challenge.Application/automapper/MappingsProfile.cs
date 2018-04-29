using challenge.Application.main.users.dto;
using challenge.Application.main.challenges;
using challenge.EF.entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using challenge.EF;
using challenge.Application.main.categories.dto;
using challenge.Application.main.subcategories.dto;
using challenge.Application.main.challenges.dto;

namespace challenge.Application.automapper
{
    public class MappingsProfile : Profile
    {
        public MappingsProfile()
        {
            CreateMap<Users, UsersDto>()
                .ForMember(dto => dto.UsersChallenges, opt => opt.MapFrom(x => x.UsersChallenges.Select(y => y.Challenge).ToList()));
            // CreateMap<Users, UsersDto>();
            // CreateMap<Inventory, InventoryDto>().ReverseMap();
            // CreateMap<InventoryType, InventoryTypeDto>();
            CreateMap<ChallengeCategories, CategoryDto>();
            CreateMap<ChallengeSubcategories, SubcategoryDto>();
            CreateMap<Challenges, ChallengeDto>();
        }
    }
}
