export class VolunteeringInstitution {
    name!: string;
    description!: string;
    link!: string;
    score!: number;
    category!: VolunteeringCategory;
}

export enum VolunteeringCategory {
    ASSISTENCIA_SOCIAL = 'Assistência social',
    CULTURA = 'Cultura',
    SAUDE = 'Saúde',
    MEIO_AMBIENTE = 'Meio ambiente',
    DEFESA_DIREITOS = 'Desenvolvimento e defesa de direitos',
    HABITACAO = 'Habitação',
    EDUCACAO = 'Educação e pesquisa',
}
