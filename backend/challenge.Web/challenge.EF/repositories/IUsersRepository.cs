using challenge.EF.entities;
using System.Collections.Generic;

namespace challenge.EF.repositories
{
    public interface IUsersRepository
    {
        List<Users> GetUsers();
        Users GetUserById(int id);
        Users GetUserByUsername(string username);
        Users GetUserByEmail(string email);
        void Save(Users user);
    }
}