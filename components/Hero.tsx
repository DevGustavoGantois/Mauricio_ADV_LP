import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

export function Hero() {
    return (
        <section className="relative" id="Home">
    <div className="flex justify-center items-center -mt-40 -z-10">
        <Image
        src="/ImgHeroBg.webp"
        className="w-full h-[950px] lg:h-[1200px]"
        width={500}
        height={100}
        alt="Background Image"
        quality={100}
        />
    </div>

    <div className="absolute z-10 flex justify-center items-center top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-[60%]">
        <Image
        src="/IMGLOGO.png"
        className="w-[650px] lg:w-[700px]"
        width={600}
        height={200}
        alt="Logo Image"
        quality={100}
        />
    </div>
    <a href="#Services">
    <div className="absolute flex justify-center items-center top-[calc(50%+100px)] left-[50%] transform -translate-x-1/2 hover:scale-[1.2] transition-all duration-700">
                <div className="p-2 flex justify-center items-center border border-white/60 rounded-full">
                    <BiChevronDown className="text-blue_primary text-2xl" />
                </div>
            </div>
    </a>
    </section>
    )
}