import { navLinksData } from "@/data/index"
import Image from "next/image"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

export function Nav() {
    return (
        <nav className="z-100 flex items-center lg:gap-[70px] justify-around z-50">
            <Image src="/IMGLOGO.png" width={200} height={100} quality={100} alt="" /> 
            {navLinksData.map((item, index) => {
                return (
                    <ul key={index} className="">
                        <li className="text-white font-secondary text-xl cursor-pointer">{item.text}</li>
                    </ul>
                )
            })}
            <div className="flex gap-4">
                <FaWhatsapp className="text-white text-3xl cursor-pointer hover:scale-[1.1] duration-700 transition-all" />
                <FaInstagram className="text-white text-3xl cursor-pointer hover:scale-[1.1] duration-700 transition-all" />
            </div>
        </nav>
    )
}