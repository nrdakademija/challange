using System;
using challenge.Application.main.userChallenges;
using challenge.Application.main.userChallenges.dto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace challenge.Web.Controllers.userChallenges
{
    [Authorize]
    [Route("/[controller]")]
    public class UserChallengesController : Controller
    {
        protected readonly IUserChallengesService _service;
        public UserChallengesController(IUserChallengesService service)
        {
            _service = service;
        }

        [AllowAnonymous]
        [HttpGet("{id}")]//grąžina vartotojo priimtus iššūkius
        public IActionResult GetUserChallengesById(int id)
        {
            try
            {
                var userChallenges = _service.GetUserChallengesById(id);
                if (userChallenges == null)
                    return NotFound();
                return Ok(userChallenges);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return BadRequest();
        }

        [AllowAnonymous]
        [HttpPost("{id}")]
        public IActionResult PostAcceptChallenge(int id, [FromQuery]int userId)
        {
            try
            {
                _service.PostAcceptChallenge(id, userId);
                return Ok();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            return BadRequest();
        }

        [AllowAnonymous]
        [HttpDelete("{id}")]
        public IActionResult DeleteUserChallenge(int id, [FromQuery] int userId)
        {
            try
            {
                _service.DeleteUserChallenge(id, userId);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return BadRequest();
        }
    }
}