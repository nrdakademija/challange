using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace challenge.Web.Controllers.userChallenges
{
    [Route("/[controller]")]
    public class UserChallengesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}