using System;
using challenge.Application.main.userChallenges;
using challenge.Application.main.userChallenges.dto;
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
        public IActionResult GetUserChallengesById(int id)
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

        [HttpPost("{userId}")]
        public IActionResult AcceptChallenge(int userId, [FromBody] UserChallengesDto challenge)
        {
            if (challenge == null) return NotFound();
            try
            {
                _service.AcceptChallenge(challenge);
                string newUri = Url.Link("GetChallenges", new { id = challenge.ChallengeId });
                return Created(newUri, challenge);
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