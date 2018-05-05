using challenge.EF.entities;
using System.Collections.Generic;

namespace challenge.EF.repositories
{
    public interface IUserChallengeRepository
    {
        List<UsersChallenges> GetUserChallengesById(int id);
    }
    
}