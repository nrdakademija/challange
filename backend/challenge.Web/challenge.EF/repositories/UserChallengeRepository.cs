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

        public List<UsersChallenges> GetUserChallengesById(int id)
        {

            var userChallanges = challengeContext.UsersChallenges.Where(p => id == p.UserId).ToList();

            foreach(var uc in userChallanges)
            {
                foreach(var ch in challengeContext.Challenges)
                {
                    if(uc.ChallengeId == ch.Id)
                    {
                        uc.Challenge = ch;
                    }
                }
            }
            return userChallanges;
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
        public void DeleteUserChallenge(int id, int userId)
        {
            var ch = challengeContext.UsersChallenges.SingleOrDefault(p => p.ChallengeId == id && p.UserId == userId);
            challengeContext.Remove(ch);
            challengeContext.SaveChanges();
        }

        public challengeContext challengeContext
        {
            get { return Context as challengeContext; }
        }
    }
}
