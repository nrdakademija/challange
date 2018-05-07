import { ChallengeModel } from '../challenges/challenge.model';
import { UserModel } from '../users/user.model';

export class UserChallengesModel {
    userId: number;
    challengeId: number;
    startDate: Date;
    endDate: Date;
    challenge: ChallengeModel[];
    user: UserModel[];

}
