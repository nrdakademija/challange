﻿using System;
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
                var ch = _service.PostAcceptChallenge(id, userId);
                return Created("http://localhost:59372/challenge/" + id, ch);
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

        [AllowAnonymous]
        [HttpPut("{id}")]
        public IActionResult UpdateUserChallenge(int id, [FromQuery] int userId, [FromBody] UserChallengesDto challenge)
        {
            try
            {
                _service.UpdateUserChallenge(id, userId, challenge);
                return Ok();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return BadRequest();
        }
    }
}