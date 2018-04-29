using challenge.EF.entities;
using System.Collections.Generic;

namespace challenge.EF.repositories
{
    public interface IChallengeRepository
    {
        List<Challenges> GetChallenges();
    }
}
