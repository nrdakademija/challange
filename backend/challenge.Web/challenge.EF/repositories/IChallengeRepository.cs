﻿using challenge.EF.entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace challenge.EF.repositories
{
    public interface IChallengeRepository
    {
        List<Challenges> GetChallenges();
    }
}
