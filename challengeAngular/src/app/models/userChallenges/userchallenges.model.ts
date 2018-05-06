import { ChallengeModel } from '../challenges/challenge.model';
import { UserModel } from '../users/user.model';

export class UserChallengesModel {
    user_id: number;
    challengeId: number;
    startDate: Date;
    endDate: Date;
    challenge: ChallengeModel[];
    user: UserModel[];

}
