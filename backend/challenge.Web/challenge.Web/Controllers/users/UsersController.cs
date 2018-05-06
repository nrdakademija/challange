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
        public IActionResult GetUsers()
        {
            var users = _usersService.GetAllUsers();
            return Ok(users);

        }

        [HttpGet("{id}")]
        public IActionResult GetUserById(int id)
        {
            try
            {
                var user = _usersService.GetUserById(id);
                if (user == null)
                    return NotFound();
                return new ObjectResult(user);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return BadRequest();

        }

        [HttpGet("username={username}")]
        public IActionResult GetUserByUsername(string username)
        {
            try
            {
                var user = _usersService.GetUserByUsername(username);
                if (user == null)
                    return NotFound();
                return new ObjectResult(user);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return BadRequest();

        }

        [HttpGet("email={email}")]
        public IActionResult GetUserByEmail(string email)
        {
            try
            {
                var user = _usersService.GetUserByEmail(email);
                if (user == null)
                    return NotFound();
                return new ObjectResult(user);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return BadRequest();

        }

        [HttpPost]
        public IActionResult Save([FromBody] UsersDto user)
        {

                _usersService.Save(user);
                return Ok(user);
        }

        /* public IActionResult Del(int id)
         {
             try
             {
                 var employee = _service.GetEmployee(id);
                 if (employee == null) return NotFound($"Darbuotojas, kurio id yra {id} nerastas");
                 _service.DeleteEmployee(id);
                 return new NoContentResult();
             }
             catch (System.Exception)
             {          } return BadRequest();
         }*/




        [HttpPut("{id}")]
        public void PutUser(int id, [FromBody] UsersDto user) {

        }

    }
}