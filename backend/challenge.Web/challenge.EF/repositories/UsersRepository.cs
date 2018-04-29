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
        //  public List<Employee> GetEmployees()
        //   public void GetEmployees()
        public List<Users> GetUsers()
        {
            return challengeContext.Users
              .Include(p => p.UsersChallenges)
             // .ThenInclude(p => p.Challenges)
              .ToList();

        }
        public challengeContext challengeContext
        {
            get { return Context as challengeContext; }
        }
    }
}
