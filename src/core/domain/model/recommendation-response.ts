import { VolunteeringInstitution } from './volunteering-institution';

export class RecommendationResponse {
    offers!: RecommendedOffer[];
}

export class Disctionaries {
    volunteering!: Volunteering;
}

export class Volunteering {
    [id: string]: any;
}

export class RecommendedOffer {
    departureDate!: string;
    returnDate!: string;
    to!: string;
    destination!: string;
    description!: string;
    price!: number;
    scores!: Scores;
}

export class Scores {
    security!: ScoreOverview<SecurityDetails>;
    attractions!: ScoreOverview<AttractionDetails>;
    volunteering!: ScoreOverview<VolunteeringInstitution[]>;
    reviews!: ScoreOverview<ReviewDetail[]>;
}

export class ScoreOverview<TDetails> {
    overallScore!: number;
    details!: TDetails;
}

export class ReviewDetail {
    score!: number;
    text!: string;
}

export class AttractionDetails {
    sight!: number;
    restaurant!: number;
    vegetarian!: number;
    shopping!: number;
    nightLife!: number;
}

export class SecurityDetails {
    lgbtq!: number;
    medical!: number;
    physicalHarm!: number;
    politicalFreedom!: number;
    theft!: number;
    women!: number;
}
