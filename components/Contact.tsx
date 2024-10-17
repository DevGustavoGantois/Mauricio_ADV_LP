import { ContactData } from "@/data";
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";

export function Contact() {
    return (
        <section className="max-w-[1440px] container mx-auto mt-40 lg:mt-60 relative mb-20 px-4" id="Contact">
            <div className="relative flex items-center justify-center w-full h-full">
                <Image 
                    src='/ImgContact.png' 
                    alt="" 
                    quality={100} 
                    className="rounded-xl w-full h-full max-h-[700px] object-cover"
                    width={1440}
                    height={700}
                />
                <div className="absolute inset-0 bg-black opacity-60 rounded-xl" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4">
                    {ContactData.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 lg:gap-8 items-center">
                            <h3 className="h4 font-secondary text-2xl sm:text-3xl lg:text-6xl">{item.title}</h3>
                            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold hidden xl:flex">{item.pretitle}</h4>
                            <div className="flex items-center">
                                <p className="text-sm sm:text-base lg:text-lg max-w-[600px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className="justify-center items-center lg:mt-6 hidden lg:flex">
                        <Link href="https://api.whatsapp.com/send?phone=5571993521111" target="_blank">
                        <Button description="Entrar em contato" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
