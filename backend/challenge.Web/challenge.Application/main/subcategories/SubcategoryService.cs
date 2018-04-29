using AutoMapper;
using challenge.Application.main.subcategories.dto;
using challenge.EF.repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace challenge.Application.main.subcategories
{
    public class SubcategoryService : ISubcategoryService
    {
        protected readonly ISubcategoryRepository _subcategoryRepository;
        protected readonly IMapper _mapper;

        public SubcategoryService(ISubcategoryRepository subcategoryRepository, IMapper mapper)
        {
            _subcategoryRepository = subcategoryRepository;
            _mapper = mapper;
        }

        public IEnumerable<SubcategoryDto> GetAllSubCategories()
        {
            var list = _subcategoryRepository.GetSubCategories();
            var listDto = _mapper.Map<List<SubcategoryDto>>(list);
            return listDto;
        }
    }
}
