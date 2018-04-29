using challenge.EF.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace challenge.EF.repositories
{
    public class SubcategoryRepository : Repository<ChallengeSubcategories>, ISubcategoryRepository
    {
        public SubcategoryRepository(challengeContext context) : base(context)
        {
        }

        public List<ChallengeSubcategories> GetSubCategories()
        {
            return challengeContext.ChallengeSubcategories
              .ToList();

        }
        public challengeContext challengeContext
        {
            get { return Context as challengeContext; }
        }
    }
}
