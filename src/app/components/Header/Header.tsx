'use client';

import { useRouter } from "next/navigation"
import { Button } from "../ui/Button"
import { Logo } from "../svg/Logo";
import Link from "next/link";
import React, { RefObject, useEffect, useRef, useState } from "react";
import Burger from "../ui/Burger";
import Menu from "../ui/Menu";

export const Header = () => {
    const useOnClickOutside = <T extends HTMLElement>(
        ref: any,
        handler: (event: MouseEvent) => void
      ) => {
        useEffect(() => {
            if(ref){
                const listener = (event: MouseEvent) => {
                    if (!ref.current || ref.current.contains(event.target as Node)) return;
                    handler(event);
                  };
              
                  document.addEventListener("mousedown", listener);
                  
                  return () => {
                    document.removeEventListener("mousedown", listener);
                  };
            }
        }, [ref, handler]);
    };
    const [open, setOpen] = useState(false);
    const node = useRef(null);
    
    useOnClickOutside(node, () => setOpen(false));
    const router = useRouter();
    return(
        <header className="header">
            <div className="header__logo" aria-label="amznukraine.com">
                <Logo />
            </div>
            <div className="ui__burger-active" ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open}>
                    <div className="header__burger">
                        <ul className="header__burger-nav"> 
                            <li><Link href="/parcel" className="header__burger-nav-link">Відстежити посилку</Link></li>
                            <li><Link href="/calculator" className="header__burger-nav-link">Калькулятор</Link></li>
                            <li><Link href="/price" className="header__burger-nav-link">Вартість</Link></li>
                        </ul>
                        <div className="header__burger-button"><Button text="Замовити" click={()=>router.push("/form")} /></div>
                    </div>
                </Menu>
            </div>
            <div className="header__menu">
                <ul className="header__menu-nav"> 
                    <li><Link href="/parcel" className="header__menu-nav-link">Відстежити посилку</Link></li>
                    <li><Link href="/calculator" className="header__menu-nav-link">Калькулятор</Link></li>
                    <li><Link href="/price" className="header__menu-nav-link">Вартість</Link></li>
                </ul>
                <div className="header__menu-button"><Button text="Замовити" click={()=>router.push("/form")} /></div>
            </div>
        </header>
    )
}