using challenge.Application.main.challenge.dto;
using challenge.Application.main.challenge;
using challenge.EF.entities;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace akademij.Application.automapper
{
    public class MappingsProfile : Profile
    {
        public MappingsProfile()
        {
            //CreateMap<Employee, EmployeeDto>()
            //    .ForMember(dto => dto.EmployeeInventory, opt => opt.MapFrom(x => x.EmployeeInventory.Select(y => y.Inventory).ToList()));
            //CreateMap<Inventory, InventoryViewDto>();
           // CreateMap<Inventory, InventoryDto>().ReverseMap();
           // CreateMap<InventoryType, InventoryTypeDto>();

        }
    }
}
