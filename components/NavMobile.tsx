import { useState } from 'react';
import { navLinksData } from "@/data";
import { FaTimes, FaInstagram, FaStream, FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

export function NavMobile() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue_primary/25 backdrop-blur-lg bg-opacity-80 fixed top-0 left-0 right-0 z-50 shadow-md lg:p-4">
            <div className="flex justify-between items-center p-4">
                <div>
                    <Image src="/IMGLOGO.png" alt="" width={150} height={150} quality={100} />
                </div>
                <button 
                    className="text-2xl lg:text-3xl focus:outline-none" 
                    aria-label="Menu" 
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes className="text-white" /> : <FaStream className="text-white" />} 
                </button>
            </div>
            {isOpen && ( 
                <ul className="flex flex-col justify-center items-center p-4 space-y-6">
                    {navLinksData.map((item, index) => ( 
                        <li key={index}>
                            <a href={item.href} className="text-lg text-white flex hover:scale-[1.1] hover:text-blue_primary  transition-all duration-700">
                                {item.text} 
                            </a>
                        </li>
                        
                    ))}
                </ul>
            )}  
        </nav>
    );
}
