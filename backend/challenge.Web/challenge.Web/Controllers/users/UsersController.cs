using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using challenge.Application.main.users;
using challenge.Application.main.users.dto;
using Microsoft.AspNetCore.Mvc;

namespace challenge.Web.Controllers.users
{
    [Route("/[controller]")]
    public class UsersController : Controller
    {
        protected readonly IUsersService _usersService;
        public UsersController(IUsersService usersService)
        {
            _usersService = usersService;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            var users = _usersService.GetAllUsers();
            return Ok(users);

        }

        [HttpGet("{id}")]
        public IActionResult GetUserById(int id)
        {
            var user = _usersService.GetUserById(id);
            if (user == null) {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPut("{id}")]
        public void PutUser(int id, [FromBody] UsersDto user) {

        }

    }
}