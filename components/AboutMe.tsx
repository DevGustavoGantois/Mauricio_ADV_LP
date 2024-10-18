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
                   <p className="">
                       Maurício Sampaio é advogado com mais de 10 anos de experiência nas áreas de Direito Empresarial, Trabalhista, Tributário e Familiar. Ele oferece consultoria e representação jurídica a clientes de diferentes portes, sempre priorizando a ética e a transparência. Comprometido com a atualização constante de seus conhecimentos, Maurício busca soluções personalizadas para proteger os interesses de seus clientes. 
                   </p>
                </div>
            </div>
        </div>
        </section>
    )
}
