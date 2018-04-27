using System;
using challenge.Application.main.challenge.dto;
using System.Collections.Generic;
using System.Text;

namespace challenge.Application.main.challenge
{
    public interface IChallengeService
    {
        IEnumerable<ChallengeDto> GetAllChallenges();
    }

    
}
