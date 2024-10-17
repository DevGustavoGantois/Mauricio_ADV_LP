import { ReactNode } from "react";

export interface NavProps {
    navLinks: string;
}

export interface cardsProps {
    title: string;
    description: string;
    btnText: string;
}

export interface AboutOfficeProps {
    title: string;
    description: string;
    btnText: string;
}

export interface AboutProps {
    title: string;
    description: string;
    btnText: string;
}

export interface TestimonialsProps {
    name: string;
    description: string;
    stars: ReactNode
}

export interface FeaturedTwoProps {
    title: string;
    description: string;
    btnText: string;
}

export interface LocationProps {
    title: string;
    description: string;
}

export interface ContactProps {
    title: string;
    description: string;
    icons: ReactNode;
}

export interface FooterProps {
    title: string;
    description: string;
    icons: ReactNode;
}


//Informations Data

export const navLinksData = [
    {text: 'Início', href: '#Home'},
    {text: 'Sobre o Escritório', href: '#AboutOffice'},
    {text: 'Quem sou', href: '#AboutMe'},
    {text: 'Depoimentos', href: '#Testimonials'},
    {text: 'Localização', href: '#Location'},
    {text: 'Canais de Contato', href: '#Contact'},
]


export const cardsData = [
    {
        title: 'Direito Empresarial',
        description: 'Focado nas relações jurídicas das atividades empresariais, oferecendo soluções preventivas e estratégicas para garantir segurança jurídica e minimizar riscos nos negócios.'
    },
    {
        title: 'Direito Familiar',
        description: 'Regula as relações familiares, envolvendo temas como casamento, divórcio, guarda dos filhos, pensão alimentícia e adoção, protegendo especialmente os mais vulneráveis, como crianças e adolescentes.'
    },
    {
        title: 'Direito Tributário',
        description: 'Regula a relação entre Estado e contribuintes na arrecadação de tributos, como impostos e taxas, buscando justiça fiscal e protegendo os contribuintes contra abusos.'
    },
    {

        title: 'Direito Trabalhista',
        description: 'Trata das relações entre empregadores e empregados, abordando contratos de trabalho, demissões, salários, horas extras e segurança no trabalho, garantindo a proteção dos direitos dos trabalhadores.'
    }
]

export const AboutOfficeData = [
    {
        title: 'Sobre o Escritório',
        description: 'O escritório Mauricio Sampaio Advocacia & Consultoria é reconhecido pela sua dedicação incansável ao direito. Sua paixão pela justiça reflete-se em soluções jurídicas personalizadas e excelência técnica. É um espaço onde cada cliente é atendido com cuidado e integridade, tornando-o uma referência na área, localizado no Centro Médico Empresarial Vitraux é um escritório pra quem busca seus serviços jurídicos.',
        btnText: 'Entre em contato',
    }
]

export const AboutMeData = [
    {   
        pretitle: 'Conheça um pouco',
        title: 'Sobre Mim',
    }
]

export const TestimonialsData = [
    {
        name: 'Debora Almeida',
        testimonial: '"Procurei o Maurício para uma questão trabalhista que estava me preocupando há meses. Desde o primeiro contato, ele demonstrou um profundo conhecimento jurídico e me passou muita confiança. O resultado foi melhor do que eu esperava, e me senti muito bem amparada durante todo o processo. Hoje, recomendo seu trabalho a todos que buscam um advogado ético e eficiente."'
        
    },
    {
        name: 'Jorge Silva',
        testimonial: '"Fiquei extremamente satisfeita com o atendimento do Dr. Maurício. Ele foi atencioso, esclareceu todas as minhas dúvidas e tratou o meu caso com muita seriedade. O resultado foi rápido e muito positivo, superando minhas expectativas. Recomendo o seu trabalho para quem procura um profissional dedicado e comprometido com os melhores interesses de seus clientes."'
        
    },
    {
        name: 'Carlos Ferreira',
        testimonial: '"Tive a oportunidade de contratar os serviços do Maurício para resolver um problema familiar bastante delicado. Ele foi extremamente atencioso, sempre ouvindo minhas preocupações e me explicando cada passo com clareza. Graças à sua dedicação, conseguimos um desfecho justo e rápido. A tranquilidade que ele proporcionou durante esse período fez toda a diferença."'
    },
    {
        name: "Carlos Henrique",
        testimonial: '"O Dr. Maurício foi um verdadeiro aliado em um momento complicado da minha vida. Desde o início, mostrou-se muito profissional e acessível, explicando cada detalhe do processo com paciência. Sua competência e dedicação foram essenciais para alcançarmos um resultado positivo. Recomendo seus serviços a todos que buscam um advogado competente e confiável."'
    }
]

export const FeaturedTwoData = [
    {
        title: 'Proteja seus direitos com quem entende do assunto!',
        description: 'estou pronto para oferecer a melhor solução jurídica para o seu caso. Agende sua consulta hoje e tenha a confiança de contar com um advogado comprometido com os resultados.',
    }
]

export const LocationData = [
    {
        title:  'Onde me Localizo',
        description: 'O escritório de Mauricio está situado em Salvador, BA, no Centro Médico Empresarial Vitraux, na Rua Sol Nascente, 43. Uma referência próxima é o Hospital Santa Isabel, que fica a poucos metros de distância, facilitando a localização para quem busca seus serviços jurídicos.'
    }
]

export const ContactData = [
    {
        title: 'Entre em contato',
        pretitle: 'Qual é o meio de comunicação mais apropriado para entrar em contato comigo?'
    },
    {description: 'Rua Sol Nascente, 43, Edf. Centro Médio Empresarial Vitraux, Sala 1603, Ondina, Salvador - BA.'},
    {description: '(71) 3486-7570'},
    {description: 'contato@msampaio.adv.br'}
]
