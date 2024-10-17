import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="p-12 bg-blue_primary">
            <div className="flex flex-col-reverse items-center lg:items-start lg:flex-row text-center lg:text-start justify-around gap-12">
                <ul className="flex flex-col gap-3 justify-center">
                <div className="mb-3 text-center lg:text-start">
                    <h3 className="h3 font-secondary text-white">Navegação</h3>
                </div>
                    <li className="text-white"><a href="#Home">Início</a></li>
                    <li className="text-white"><a href="#AboutOffice">Quem sou</a></li>
                    <li className="text-white"><a href="#AboutMe">Sobre o Escritório</a></li>
                    <li className="text-white"><a href="#">Areas de Atuação</a></li>
                    <li className="text-white"><a href="#Location">Localização</a></li>
                    <li className="text-white"><a href="#Contact">Canais de Contato</a></li>
                </ul>
                <ul>
                    <div>
                        <h3 className="text-white text-center font-secondary h3">Social</h3>
                    </div>
                    <div className="flex gap-4 justify-center mt-4">
                        <li className="text-white text-3xl hover:scale-[1.1] duration-300 transition-all"><Link href="https://api.whatsapp.com/send?phone=5571993521111" target="_blank"><FaWhatsapp /></Link></li>
                        <li className="text-white text-3xl hover:scale-[1.1] duration-300 transition-all"><Link href="https://www.instagram.com/mauriciosmp/?hl=pt-br" target="_blank"><FaInstagram /></Link></li>
                        <li className="text-white text-3xl hover:scale-[1.1] duration-300 transition-all"><Link href="mailto:contato@msampaio.adv.br" target="_blank"><FaEnvelope /></Link></li>
                    </div>
                </ul>
                <Image src="/IMGLOGO.png" width={100} height={100} quality={100} alt="" className="w-[350px] h-full" />
            </div>
            <div className="mt-12 border-t border-white/50 ">
                <p className="text-center text-white/50 mt-12">@2024 Advocacia & Consultoria Maurício Sampaio</p>
                <p className="text-center text-white/40 mt-12 hover:text-blue-300 transition-all duration-700"><a href="https://www.instagram.com/devgustavogantois_/?hl=pt-br" target="_blank">Desenvolvido por @devgustavogantois</a></p>
            </div>
        </footer>
    )
}