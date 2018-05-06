using challenge.EF.entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace challenge.EF.repositories
{
    public class UserChallengeRepository: Repository<UsersChallenges>, IUserChallengeRepository
    {
        public UserChallengeRepository(challengeContext context) : base(context)
        {
        }
       /* SELECT* FROM dbo.users_challenges AS uc JOIN dbo.challenges AS ch
ON uc.challenge_id = ch.id
WHERE uc.user_id = 2;*/
        public List<UsersChallenges> GetUserChallengesById(int id)
        {
            return challengeContext.UsersChallenges
             //  .Include(p => p.Challenge)
             //  .ThenInclude (p => p.UsersChallenges)
               .Where(p => p.UserId == id)
              .ToList();
        }

        public void AcceptChallenge(UsersChallenges challenge)
        {
           
                var userCh = new UsersChallenges()
                {
                    UserId = challenge.UserId,
                    ChallengeId = challenge.ChallengeId,
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now,
                    Challenge = challenge.Challenge
                };
            challengeContext.UsersChallenges.Add(userCh);
            challengeContext.SaveChanges();
        }

        public challengeContext challengeContext
        {
            get { return Context as challengeContext; }
        }
    }
}
