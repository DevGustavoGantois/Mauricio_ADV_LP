'use client'

import { AboutMeData } from "@/data";
import Image from "next/image";

import { motion } from "framer-motion";
import { FadeUp } from "@/data/variants";

export function AboutMe() {
    return (
        <section className="max-w-[1440px] container mx-auto" id="AboutMe">
        <div>
            {AboutMeData.map((item, index) => {
                return (
                    <div key={index} className="mt-60 lg:mb-0">
                        <p className="text-sm text-center ">{item.pretitle}</p>
                        <h1 className="h3 lg:text-[55px] font-secondary text-center text-blue_primary">{item.title}</h1>
                    </div>
                )
            })}
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-around mt-20 lg:mt-60">
            <div className="flex justify-center items-center" >
                <Image src='/FotoDrMauricio.webp' width={400} height={400} quality={100} alt="" className="border-[15px] border-t-blue_primary border-l-blue_primary" />
            </div>
                <div className="mt-20 lg:mt-0">
                <div className="flex flex-col max-w-[650px]">
                    <div className="flex flex-col gap-4">
                        <h2 className="h3 font-secondary text-blue_primary">Início da Carreira</h2>
                        <p className="mb-6 text-gray_primary">Apaixonado pelo Direito desde cedo, Maurício Sampaio inicia sua jornada advocatícia, motivado pelo compromisso com a justiça e pela vontade de fazer a diferença na vida das pessoas.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="h3 font-secondary text-blue_primary">Mais de uma Década de Experiência</h2>
                        <p className="mb-6 text-gray_primary">Com mais de 10 anos de atuação, Maurício constrói uma sólida reputação no mercado jurídico, sempre pautado por integridade, ética e excelência técnica. Seu escritório se destaca pelo atendimento personalizado em áreas diversas, como Direito Trabalhista, Familiar e Tributário.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="h3 font-secondary text-blue_primary">Equilíbrio entre Vida Profissional e Pessoal</h2>
                        <p className="mb-6 text-gray_primary">Além do trabalho no escritório, Maurício encontra na natureza um refúgio para relaxamento e renovação de energias. A vida ao ar livre se tornou uma paixão, fundamental para manter o equilíbrio necessário entre sua vida profissional intensa e os momentos de descanso.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}