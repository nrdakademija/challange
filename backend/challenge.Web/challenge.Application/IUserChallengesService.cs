using challenge.Application.main.userChallenges.dto;
using System.Collections.Generic;

namespace challenge.Application.main.userChallenges
{
    public interface IUserChallengesService
    {
        IEnumerable<UserChallengesDto> GetUserChallengesById(int id);
        void AcceptChallenge(UserChallengesDto challenge);
    }
}