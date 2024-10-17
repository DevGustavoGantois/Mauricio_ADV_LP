'use client'

import { AboutOfficeData } from "@/data/index";
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";

import { motion } from "framer-motion";
import { FadeUp } from "@/data/variants";

export function AboutOffice() {
    return (
        <section className="max-w-[1440px] container mx-auto" id="AboutOffice">
        <div className="flex flex-col-reverse justify-around items-center text-center lg:text-start lg:flex-row mt-60 gap-y-10 order-1 lg:order-2">
            <div>
                {AboutOfficeData.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1 className="font-secondary text-blue_primary h3">{item.title}</h1>
                            <p className="max-w-[400px]">{item.description}</p>
                            <div className="mt-8">
                                <Link href="https://api.whatsapp.com/send?phone=5571993521111" target="_blank">
                                <Button description="Entre em contato" />
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <motion.div variants={FadeUp} initial="hidden" animate="visible" >
            <Image src="/ImgEscritorio.webp" className="md:w-[450px] lg:w-[500px] xl:w-[800px]" width={500} height={100} alt="" quality={100} />           
            </motion.div>
        </div>
        </section>
    )
}