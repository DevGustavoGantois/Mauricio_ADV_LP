'use client';

import { Nav } from "./Nav";
import { NavMobile } from "./NavMobile";


export function Header() {

    return (
        <header className="z-50 relative">
            <div className="hidden lg:flex justify-around items-center mt-8">   
                
            </div>  
            <div>
                <NavMobile />
            </div>
        </header>
    );
}
