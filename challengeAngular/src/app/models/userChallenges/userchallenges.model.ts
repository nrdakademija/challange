import { ChallengeModel } from '../challenges/challenge.model';

export class UserChallengesModel {
    user_id: number;
    challengeId: number;
    startDate: Date;
    endDate: Date;
    challenge: ChallengeModel[];

}
