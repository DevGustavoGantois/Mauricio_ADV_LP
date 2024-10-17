import type { Metadata } from "next";
import { Montserrat} from 'next/font/google'
import { Footer } from '@/components/Footer'
import "./globals.css";
import { Header } from "@/components/Header";



const montSerrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Escolha os pesos que deseja usar
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Escritório Maurício Sampaio",
  description: "Escritório de Advocacia com mais de 10 anos de atuação na área.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montSerrat.variable} antialiased bg-white_primary`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
