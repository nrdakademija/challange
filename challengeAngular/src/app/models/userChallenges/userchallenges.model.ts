import { ChallengeModel } from '../challenges/challenge.model';

export class UserChallengesModel {
    user_id: Number;
    challenge_id: Number;
    startDate: Date;
    endDate: Date;
    challenges: ChallengeModel[];

}
