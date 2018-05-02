using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using challenge.Application.main.challenges;
using Microsoft.AspNetCore.Mvc;

namespace challenge.Web.Controllers.challenge
{
    [Route("/[controller]")]
    public class ChallengeController : Controller
    {
        protected readonly IChallengeService _challengeService;
        public ChallengeController(IChallengeService challengeService)
        {
            _challengeService = challengeService;
        }
        // GET api/values
        [HttpGet]
        public IActionResult GetChallenges()
        {
            try
            {
                var challenges = _challengeService.GetAllChallenges();
                if(challenges != null)
                    return Ok(challenges);
                return NotFound();
            }
            catch (Exception err)
            {
                Console.WriteLine(err.Source);
            }
            return BadRequest();
        }

        [HttpGet("{id}")]
        public IActionResult GetChallengesById(int id)
        {
            try
            {
                var challenge = _challengeService.GetChallengeById(id);
                if (challenge != null)
                    return new ObjectResult(challenge);
                return NotFound();
            }
            catch (Exception err)
            {
                Console.WriteLine(err.Source);
            }
            return BadRequest();

        }


    }
}