using challenge.EF.entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace challenge.EF.repositories
{
    public class ChallengeRepository : Repository<Challenges>, IChallengeRepository
    {
        public ChallengeRepository(challengeContext context) : base(context)
        {
        }

        public List<Challenges> GetChallenges()
        {
            return challengeContext.Challenges
              .ToList();

        }
        public challengeContext challengeContext
        {
            get { return Context as challengeContext; }
        }
    }
}
