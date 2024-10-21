import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Escritório de Advocacia Maurício Sampaio',
  description:
    'O Escritório de Advocacia Maurício Sampaio oferece serviços jurídicos de alta qualidade, com uma equipe de advogados experientes e especializados em diversas áreas do Direito...',
  openGraph: {
    type: 'website',
    url: 'https://msampaio.adv.br/',  // Atualize aqui
    title: 'Escritório de Advocacia Maurício Sampaio',
    description:
      'O Escritório de Advocacia Maurício Sampaio oferece serviços jurídicos de alta qualidade...',
    images: [
      {
        url: 'https://msampaio.adv.br/IMGLOGO.png', // Atualize a URL da imagem também
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
    creator: '@devgustavogantois_',
    title: 'Escritório de Advocacia Maurício Sampaio',
    description:
      'O Escritório de Advocacia Maurício Sampaio oferece serviços jurídicos de alta qualidade...',
    images: ['https://msampaio.adv.br/IMGLOGO.png'], 
  },
  robots: {
    index: true,
    follow: true,
  },
};
