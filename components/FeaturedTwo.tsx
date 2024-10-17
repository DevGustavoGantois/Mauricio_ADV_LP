import { FeaturedTwoData } from "@/data";
import { Button } from "./Button";
import Link from "next/link";

export function FeaturedTwo() {
    return (
        <section className="max-w-[1440px] container mx-auto">
            <div className="mt-40 flex flex-col justify-around items-center lg:flex-row-reverse">
            <div>
            {FeaturedTwoData.map((item, index) => {
                    return (
                        <div key={index} className="text-center lg:text-start justify-center items-center lg:justify-start">
                            <h3 className="h3 lg:text-[50px]  font-secondary text-blue_primary max-w-[650px]">{item.title}</h3>
                            <p className="text-gray_primary max-w-[650px] mt-8">{item.description}</p>
                            <p className="text-gray_primary max-w-[650px] mt-4">Entre em contato e descubra como posso ajudar você a conquistar a justiça que merece.</p>
                        </div>
                    )
                })}
                <div className="mt-8 justify-center items-center lg:justify-start hidden lg:flex">
                    <Link href="https://api.whatsapp.com/send?phone=5571993521111" target="_blank">
                    <Button description="Entrar em contato" />
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-8 lg:mt-0">
                <div className="flex flex-col items-center gap-2">
                    <h3 className="text-[60px] font-secondary text-blue_primary">+10</h3>
                    <p>Anos de experiência</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <h3 className="text-[60px] font-secondary text-blue_primary">+300</h3>
                    <p>Clientes Satisfeitos</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <h3 className="text-[60px] font-secondary text-blue_primary">+500</h3>
                    <p>Casos Solucionados</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <h3 className="text-[60px] font-secondary text-blue_primary">+200</h3>
                    <p>Processos Vitoriosos</p>
                </div>
            </div>
            <div className="mt-12 xl:hidden">
                <Button description="Entrar em contato" />
            </div>
            </div>
        </section>
    )
}