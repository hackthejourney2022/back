import {
    VolunteeringInstitution,
    VolunteeringCategory,
} from 'src/core/domain/model';

export const volunteeringInstitutions: VolunteeringInstitution[] = [
    {
        name: 'Instituto Dia Feliz',
        description:
            'Nasceu assim, em 2011, o projeto não governamental e sem fins lucrativos, DIA FELIZ. Levando alegria, brinquedos e alimentação básica para aquelas crianças família da cidade de São José dos Basílios, no Maranhão',
        link: 'https://www.institutodiafeliz.org/',
        score: 4.999,
        category: VolunteeringCategory.ASSISTENCIA_SOCIAL,
    },
    {
        name: 'Cruz Vermelha',
        description:
            'A Cruz Vermelha é a principal instituição de ajuda humanitária do mundo. No Brasil está presente em 21 estados. Seus voluntários sempre dizem que, para minorar o sofrimento da população, sempre são os primeiros a chegar e os últimos a sair. Até hoje, mais de seis anos após as chuvas que provocaram deslizamentos na serra do Rio de Janeiro, ainda há pessoas da região que recebem apoio psicossocial.',
        link: 'http://www.cruzvermelha.org.br/',
        score: 4.3,
        category: VolunteeringCategory.ASSISTENCIA_SOCIAL,
    },
    {
        name: 'Médicos Sem Fronteiras (MSF)',
        description:
            'Médicos Sem Fronteiras (MSF) é uma organização humanitária internacional que leva cuidados de saúde a pessoas afetadas por graves crises humanitárias. Também é missão da MSF chamar a atenção para as dificuldades enfrentadas pelos pacientes atendidos em seus projetos.',
        link: 'https://www.msf.org.br/',
        score: 4.5,
        category: VolunteeringCategory.SAUDE,
    },
    {
        name: 'Dog Hero',
        description:
            'SUIPA é uma sigla que quer dizer Sociedade União Internacional Protetora dos Animais. Além de um abrigo para resgate de animais, a organização possui ainda uma clínica veterinária que oferece atendimento a preços populares.',
        link: 'https://www.suipa.org.br',
        score: 3.1,
        category: VolunteeringCategory.MEIO_AMBIENTE,
    },
    {
        name: 'Cão sem dono',
        description:
            'A Cão sem dono é um ONG de proteção animal localizada em São Paulo. Eles possuem um abrigo próprio onde inúmeros cachorros estão disponíveis para adoção. Para financiar seus trabalhos, eles oferecem a opção de apadrinhamento, onde a pessoa se compromete a doar uma certa quantia de dinheiro mensal para ajudar um determinado cachorro do abrigo.',
        link: 'http://www.caosemdono.com.br',
        score: 3.2,
        category: VolunteeringCategory.MEIO_AMBIENTE,
    },
    {
        name: 'Fraternidade sem fronteiras',
        description:
            'Na África subsaariana, abrimos e mantemos centros de acolhimento, onde oferecemos alimentação, cuidados com a higiene, atividades pedagógicas, culturais e formação profissionalizante. Amparamos idosos com alimentação e construção de casas. Estamos perfurando poços artesianos nas aldeias africanas e, com a chegada da água, iniciamos o cultivo sustentável de alimentos, capacitando jovens agricultores e envolvendo as crianças em atividades de educação ambiental.',
        link: 'https://www.fraternidadesemfronteiras.org.br',
        score: 4.8,
        category: VolunteeringCategory.ASSISTENCIA_SOCIAL,
    },
    {
        name: 'Plan International',
        description:
            'A Plan International é uma organização humanitária, não governamental e sem fins lucrativos, que promove os direitos das crianças e a igualdade para as meninas. Acreditamos no poder e potencial de todas as crianças, mas sabemos que muitas vezes isso é reprimido pela pobreza, violência, exclusão e discriminação. Trabalhamos em conjunto com crianças, jovens, apoiadores e uma rede de parcerias no enfrentamento da desigualdade de gênero e pelas crianças em situação de vulnerabilidade. Nós apoiamos os direitos das crianças desde o seu nascimento até a idade adulta e possibilitamos que elas se preparem – e respondam – a crises e adversidades. Impulsionamos mudanças na prática e na política nos níveis local, nacional e global, utilizando o nosso alcance, a nossa experiência e o nosso conhecimento. Temos construído parcerias poderosas para crianças há mais de 80 anos e atuamos em mais de 70 países.',
        link: 'https://plan.org.br',
        score: 4.9,
        category: VolunteeringCategory.DEFESA_DIREITOS,
    },
];
