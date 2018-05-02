using AutoMapper;
using challenge.Application.main.users.dto;
using challenge.EF.repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace challenge.Application.main.users
{
    public class UsersService: IUsersService
    {
        protected readonly IUsersRepository _usersRepository;
        protected readonly IMapper _mapper;

        public UsersService(IUsersRepository usersRepository, IMapper mapper)
        {
            _usersRepository = usersRepository;
            _mapper = mapper;
        }

        public IEnumerable<UsersDto> GetAllUsers()
        {
            var list = _usersRepository.GetUsers();
            var listDto = _mapper.Map<List<UsersDto>>(list);
            return listDto;
        }

        public UsersDto GetUserById(int id) {
            var user = _usersRepository.GetUserById(id);
            var userDto = _mapper.Map<UsersDto>(user);
            return userDto;
        }
    }
}
