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
        public IActionResult Get()
        {
            var challenges = _challengeService.GetAllChallenges();
            return Ok(challenges);

        }
    }
}