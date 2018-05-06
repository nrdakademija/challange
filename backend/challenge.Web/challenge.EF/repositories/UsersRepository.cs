using challenge.EF.entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
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

        public void Save (Users user)
        {
            var u = new Users()
            {
                Id = user.Id,
                FullName = user.FullName,
                Username = user.Username,
                Email = user.Email,
                Password = user.Password,
                ImgUrl = MD5Hash(user.Email),
                Points = user.Points,
                Level = user.Level
            };
            challengeContext.Add(u);
            challengeContext.SaveChanges();
        }

        public static string MD5Hash(string text)
        {
            MD5 md5 = new MD5CryptoServiceProvider();

            //compute hash from the bytes of text
            md5.ComputeHash(ASCIIEncoding.ASCII.GetBytes(text));
            //get hash result after compute it
            byte[] result = md5.Hash;
            StringBuilder strBuilder = new StringBuilder();
            for (int i = 0; i < result.Length; i++)
            {
                //change it into 2 hexadecimal digits
                //for each byte
                strBuilder.Append(result[i].ToString("x2"));
            }

            return strBuilder.ToString();
        }

        public challengeContext challengeContext
        {
            get { return Context as challengeContext; }
        }
    }
}
