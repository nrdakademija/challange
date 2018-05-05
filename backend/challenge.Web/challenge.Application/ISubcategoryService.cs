using challenge.Application.main.subcategories.dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace challenge.Application
{
    public interface ISubcategoryService
    {
        IEnumerable<SubcategoryDto> GetAllSubCategories();

        
    }
}
