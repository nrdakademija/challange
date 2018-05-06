using challenge.Application.main.users.dto;
using System.Collections.Generic;

namespace challenge.Application.main.users
{
    public interface IUsersService
    {
        IEnumerable<UsersDto> GetAllUsers();
        UsersDto GetUserById(int id);
        UsersDto GetUserByUsername(string username);
        UsersDto GetUserByEmail(string email);
        void Save(UsersDto user);
    }
}