using challenge.EF.entities;
using System.Collections.Generic;
using System.Linq;

namespace challenge.EF.repositories
{
    public interface IChallengeRepository
    {
        List<Challenges> GetChallenges();
     //   IQueryable<Challenges> GetChallenges();
        Challenges GetChallengeById(int id);
    }
}
