using challenge.EF.entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace challenge.EF.repositories
{
    public class UsersRepository : Repository<Users>, IUsersRepository
    {
        public UsersRepository(challengeContext context) : base(context)
        {
        }
 
        public List<Users> GetUsers()
        {
            return challengeContext.Users
              .Include(p => p.UsersChallenges)
             .ThenInclude(p => p.Challenge)
              .ToList();
        }

        public Users GetUserById(int id) {
            return challengeContext.Users
                .Include(p => p.UsersChallenges)
                .ThenInclude(p => p.Challenge)
                .SingleOrDefault(p => p.Id == id);
        }
        public Users GetUserByUsername(string username)
        {
            return challengeContext.Users
                .Include(p => p.UsersChallenges)
                .ThenInclude(p => p.Challenge)
                .SingleOrDefault(p => p.Username == username);
        }

        public Users GetUserByEmail(string email)
        {
            return challengeContext.Users
                .Include(p => p.UsersChallenges)
                .ThenInclude(p => p.Challenge)
                .SingleOrDefault(p => p.Email == email);
        }

        public void Save (Users user)
        {
            challengeContext.Add(user);
            challengeContext.SaveChanges();
        }
        public challengeContext challengeContext
        {
            get { return Context as challengeContext; }
        }
    }
}
