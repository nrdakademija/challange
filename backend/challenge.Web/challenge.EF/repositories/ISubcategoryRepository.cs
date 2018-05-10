using challenge.EF.entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace challenge.EF.repositories
{
    public interface ISubcategoryRepository
    {
        List<ChallengeSubcategories> GetSubCategories();
        void PostSubcategory(ChallengeSubcategories subcat);
        void DeleteSubcategory(int id);
        void UpdateSubcategory(int id, ChallengeSubcategories subcategory);
    }
}
