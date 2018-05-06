import { ChallengeModel } from '../challenges/challenge.model';


export class UserModel {
    id: Number;
    fullName: String;
    username: String;
    password: String;
    imgUrl: String;
    email: String;
    points: number;
    level: Number;
    challenges: ChallengeModel[];
}
