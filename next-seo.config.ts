import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Escritório de Advocacia Maurício Sampaio',
    description:
      'O Escritório de Advocacia Maurício Sampaio oferece serviços jurídicos de alta qualidade, com uma equipe de advogados experientes e especializados em diversas áreas do Direito, incluindo Direito Civil, Direito Empresarial, Direito Tributário e Direito Trabalhista. Nossa missão é proporcionar soluções jurídicas eficazes e personalizadas, garantindo a proteção dos direitos e interesses de nossos clientes. Nosso escritório se destaca pelo compromisso com a ética, transparência e atendimento humanizado. Trabalhamos tanto com consultoria preventiva quanto com a defesa em processos judiciais, sempre buscando a melhor estratégia para cada caso. Se você precisa de assessoria jurídica confiável, entre em contato conosco. No Escritório de Advocacia Maurício Sampaio, seu problema é nossa prioridade!',
    openGraph: {
      type: 'website',
      url: 'https://mauricio-adv-lp.vercel.app/',
      title: 'Escritório de Advocacia Maurício Sampaio',
      description:
        'O Escritório de Advocacia Maurício Sampaio oferece serviços jurídicos de alta qualidade, com uma equipe de advogados experientes e especializados em diversas áreas do Direito, incluindo Direito Civil, Direito Empresarial, Direito Tributário e Direito Trabalhista. Nossa missão é proporcionar soluções jurídicas eficazes e personalizadas, garantindo a proteção dos direitos e interesses de nossos clientes.',
      images: [
        {
          url: 'https://mauricio-adv-lp.vercel.app/IMGLOGO.png',
          width: 800,
          height: 800,
          alt: 'Logo Escritório',
        },
      ],
      siteName: 'Escritório Maurício Sampaio',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@EscritórioMaurícioSampaio',
      creator: '@mauricioSampaio',
      title: 'Escritório de Advocacia Maurício Sampaio',
      description:
        'O Escritório de Advocacia Maurício Sampaio oferece serviços jurídicos de alta qualidade, com uma equipe de advogados experientes e especializados em diversas áreas do Direito, incluindo Direito Civil, Direito Empresarial, Direito Tributário e Direito Trabalhista.',
      images: ['https://mauricio-adv-lp.vercel.app/IMGLOGO.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };