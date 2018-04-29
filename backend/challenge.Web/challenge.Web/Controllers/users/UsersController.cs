using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using challenge.Application.main.users;
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
            //  _employeeRepository.GetEmployees();
            var users = _usersService.GetAllUsers();
            return Ok(users);

        }
    }
}