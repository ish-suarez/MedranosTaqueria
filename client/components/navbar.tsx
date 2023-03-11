import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from './navbar.module.css'

const streetAddress_href = 'https://www.google.com/maps/place/23955+Franz+Rd,+Katy,+TX+77493/@29.8014134,-95.7851712,17z/data=!3m1!4b1!4m5!3m4!1s0x864126f7d56eb2ad:0x67b7d1e350bf3b58!8m2!3d29.8014134!4d-95.7851712'
const phoneNumber_href = 'tel:2816704030'

const navigationPages = [
    {
        to: '/',
        linkName: 'Home'
    },
    {
        to: '/Menu',
        linkName: 'Menu'
    },
    {
        to: '/AboutUs',
        linkName: 'About Us'
    }
]

const NavLinks = ({ to, linkName, pathname }: { to: string, linkName: string, pathname: string }) => (
        <Link 
            href={to} 
            className={`md:text-lg text-green-50 md:text-green-900 transition h-min duration-300 border-b-0 py-1 text-right ${styles.linkUnderline} ${styles.linkUnderlineBlack} font-semibold ${to === pathname ? 'hidden' : null}  `}>
                {linkName}
        </Link>
    );

const MobileNavbar = ({ pathname, open }:  { pathname: string, open: boolean }) => {
    return (
        <div className={`z-20 w-full fixed top-24 border-b-4 border-red-700 bg-amber-500 transform delay-75 ${open ? ' translate-x-0' : '-translate-x-full lg:hidden'} transition-transform duration-300 ease-in-out`}>
            <ul className="px-5 py-5 flex flex-col items-end bg-emerald-900">
                {
                    navigationPages.map(({ to, linkName }: { to: string, linkName: string }) => <NavLinks key={to} to={to} linkName={linkName} pathname={pathname} /> )
                }
            </ul>
        </div>
    );
}

export default function Navbar(){
    const [open, setOpen] = useState(false);
    const {pathname} = useRouter();

    return (
        <>
            <nav className={`z-50 w-full max-w-full fixed flex justify-between py-5 bg-amber-500 lg:px-20`}>

                <div className="flex flex-col items-start px-3 sm:px-10 w-full">
                    <div className="flex flex-col items-center text-xs text-green-900">
                        <Link href={'/'}>
                            <p className="font-extrabold text-red-700 text-xl md:text-2xl lg:text-2xl transition delay-75 hover:scale-110">Medrano's Taqueria</p>
                        </Link>
                        <div className="flex">
                            <img className="px-1 lg:p-1 lg:w-[32px]" src="https://img.icons8.com/officexs/16/null/map-pin.png"/>
                            <a href={streetAddress_href} target='_blank' rel='noreferrer' className='hover:underline font-bold lg:text-lg'>
                                <address>23955 Franz Rd. Katy, Texas 77493</address>
                            </a>
                        </div>
                        <div className="flex xl:text-lg">
                            <img className="px-1 lg:w-[28px]" src="https://img.icons8.com/external-aficons-studio-detailed-outline-aficons-studio/17/null/external-phone-call-food-delivery-aficons-studio-detailed-outline-aficons-studio.png"/>
                            <a href={phoneNumber_href}  className='font-bold hover:underline'>
                                281-670-4030
                            </a>
                        </div>
                    </div>
                </div>

                <ul className="hidden 2xl:mr-20 w-1/5 md:flex justify-around">
                    {
                        navigationPages.map(({ to, linkName }: { to: string, linkName: string }) => <NavLinks key={to} to={to} linkName={linkName} pathname={pathname} /> )
                    }
                </ul>

                <div className="z-50 flex relative w-8 h-10 flex-col justify-around scale-75 items-center md:hidden mr-3 cursor-pointer" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-[2px] w-full bg-green-900 rounded-lg transform transition duration-300 ease-in-out ${open ? " bg-green-900 rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-[2px] w-full bg-green-900 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-[2px] w-full bg-green-900 rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-green-900 -rotate-45 -translate-y-3.5" : ""}`} />
                </div>
                <MobileNavbar pathname={pathname} open={open} />
            </nav>
        </>
    );
}