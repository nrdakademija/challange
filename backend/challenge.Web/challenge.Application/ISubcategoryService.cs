using challenge.Application.main.subcategories.dto;
using challenge.EF.entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace challenge.Application
{
    public interface ISubcategoryService
    {
        IEnumerable<SubcategoryDto> GetAllSubCategories();
        void DeleteSubcategory(int id);
        void PostSubcategory(SubcategoryDto item);
        void UpdateSubcategory(int id, SubcategoryDto subcategory);
    }
}
