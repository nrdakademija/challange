using AutoMapper;
using challenge.Application.main.challenges.dto;
using challenge.EF.repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace challenge.Application.main.challenges
{
    public class ChallengeService: IChallengeService
    {
        protected readonly IChallengeRepository _challengeRepository;
        protected readonly IMapper _mapper;

        public ChallengeService(IChallengeRepository challengeRepository, IMapper mapper)
        {
            _challengeRepository = challengeRepository;
            _mapper = mapper;
        }

        public IEnumerable<ChallengeDto> GetAllChallenges()
        {
            var list = _challengeRepository.GetChallenges();
            var listDto = _mapper.Map<List<ChallengeDto>>(list);
            return listDto;
        }
    }
}
