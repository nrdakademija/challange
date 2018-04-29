using challenge.EF.entities;
using System.Collections.Generic;

namespace challenge.EF.repositories
{
    public interface IUsersRepository
    {
        List<Users> GetUsers();
    }
}