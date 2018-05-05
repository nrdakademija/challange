using System;
using challenge.Application.main.userChallenges;
using Microsoft.AspNetCore.Mvc;

namespace challenge.Web.Controllers.userChallenges
{
    [Route("/[controller]")]
    public class UserChallengesController : Controller
    {
        protected readonly IUserChallengesService _service;
        public UserChallengesController(IUserChallengesService service)
        {
            _service = service;
        }

        [HttpGet("{id}")]
        public IActionResult GetUserChallengeById(int id)
        {
            try
            {
                var userChallenges = _service.GetUserChallengesById(id);
                if (userChallenges == null)
                    return NotFound();
                return new ObjectResult(userChallenges);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return BadRequest();
        }

        //[HttpDelete("{id}")]
        //public IActionResult DeleteUserChallenge(int userId, int challengeId)
        //{
        //    try
        //    {
        //        var challenge = ChallengeService.GetChallengeById(challengeId);
        //        if (challenge == null) return NotFound($"challenge with id {challengeId} not found");
        //        _service.DeleteEmployee(id);
        //        return new NoContentResult();
        //    }
        //    catch (Exception err)
        //    {
        //        Console.WriteLine(err);
        //    }
        //    return BadRequest();
        //}
    }
}