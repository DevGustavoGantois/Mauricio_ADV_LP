'use client'

import Link from "next/link";
import { Button } from "./Button";
import { CardServices } from "./CardServices";
import { motion } from "framer-motion";
import { FadeUp } from "@/data/variants";

export function Featured() {
    return (
        <section className="max-w-[1440px] container mx-auto" id="Services">
            <div className="mt-24 flex flex-col justify-center lg:justify-around items-center lg:flex-row">
            <div>
                    <h1 className="text-[45px] lg:text-[60px] text-blue_primary text-center lg:text-start font-secondary lg:mt-4">Algumas das áreas na qual <br /> eu atuo</h1>
                </div>
                <div>
                    <p className="max-w-[350px] lg:max-w-[550px] text-center text-gray_primary lg:text-start">Com anos de experiência no mercado jurídico, ofereço serviços personalizados para atender às suas necessidades legais com a máxima eficiência e sigilo. Estou pronto(a) para orientá-lo(a) em cada etapa, garantindo um atendimento de excelência e soluções jurídicas precisas.</p>
                    <div className="mt-10 justify-center items-center flex lg:justify-start">
                        <Link href="https://api.whatsapp.com/send?phone=5571993521111" target="_blank">
                        <Button description="Saiba mais" />
                        </Link>
                    </div>
                </div> 
            </div>
                <div className="mt-40">
                    <CardServices />
                </div> 
        </section>
    )
}