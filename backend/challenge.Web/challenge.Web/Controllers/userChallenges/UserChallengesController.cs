//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using challenge.Application.main.challenges;
//using challenge.Application.main.users;
//using Microsoft.AspNetCore.Mvc;

//namespace challenge.Web.Controllers.userChallenges
//{
//    [Route("/[controller]")]
//    public class UserChallengesController : Controller
//    {
//        protected readonly IUsersService _userChallengeService;
//        public UserChallengesController(IUsersService userChallengeService)
//        {
//            _userChallengeService = userChallengeService;
//        }

//        [HttpGet("{id}")]
//        public IActionResult GetUserChallengeById(int id)
//        {
//            try
//            {
//                var userChallenge = _userChallengeService.GetUserChallengeById(id);
//                if (userChallenge == null)
//                    return NotFound();
//                return new ObjectResult(userChallenge);
//            }
//            catch (Exception ex)
//            {
//                Console.WriteLine(ex);
//            }
//            return BadRequest();
//        }

//        [HttpDelete("{id}")]
//        public IActionResult DeleteUserChallenge(int userId, int challengeId)
//        {
//            try
//            {
//                var challenge = ChallengeService.GetChallengeById(challengeId);
//                if (challenge == null) return NotFound($"challenge with id {challengeId} not found");
//                _service.DeleteEmployee(id);
//                return new NoContentResult();
//            }
//            catch (Exception err)
//            {
//                Console.WriteLine(err);
//            }
//            return BadRequest();
//        }
//    }
//}