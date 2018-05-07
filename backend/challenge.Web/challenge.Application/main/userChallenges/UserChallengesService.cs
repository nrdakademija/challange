using AutoMapper;
using challenge.Application.main.challenges.dto;
using challenge.Application.main.userChallenges.dto;
using challenge.EF.entities;
using challenge.EF.repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace challenge.Application.main.userChallenges
{
    public class UserChallengesService: IUserChallengesService
    {
        protected readonly IUserChallengeRepository _repository;
        protected readonly IMapper _mapper;

        public UserChallengesService(IUserChallengeRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public IEnumerable<UserChallengesDto> GetUserChallengesById(int id)
        {
            var list = _repository.GetUserChallengesById(id);
            var listDto = _mapper.Map<List<UserChallengesDto>>(list);
            return listDto;
        }

        public IEnumerable<ChallengeDto> GetUserChallengesListById(int id)
        {
            var list = _repository.GetUserChallengesListById(id);
            var listDto = _mapper.Map<List<ChallengeDto>>(list);
            return listDto;
        }

        public void AcceptChallenge(UserChallengesDto challenge)
        {
            var challengeDto = _mapper.Map<UsersChallenges>(challenge);
               _repository.AcceptChallenge(challengeDto);

        }
    }
}
