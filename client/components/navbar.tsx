import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import { useState } from "react";

import styles from './navbar.module.css'

const streetAddress_href = 'https://maps.apple.com/?address=23955%20Franz%20Rd,%20Katy,%20TX%20%2077493,%20United%20States&ll=29.801458,-95.785186&q=23955%20Franz%20Rd&_ext=EiYp9Esf9wXMPUAxKZxXS5XyV8A58PZqr1LOPUBB48YOr+vxV8BQBA%3D%3D'
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
            className={`md:text-lg  transition h-min duration-300 border-b-0 py-1 text-right md:text-center w-20 ${styles.linkUnderline} ${styles.linkUnderlineBlack} font-semibold ${to === pathname ? 'hidden' : null}  `}>
                {linkName}
        </Link>
    );

const MobileNavbar = ({ pathname, open }:  { pathname: string, open: boolean }) => {
    return (
        <div className={`z-20 w-full fixed top-24 border-b-4 ${pathname === '/Menu' ? 'border-teal-700/30' : 'border-red-700'} transform delay-75 ${open ? ' translate-x-0' : '-translate-x-full lg:hidden'} transition-transform duration-300 ease-in-out`}>
            <ul className={`px-5 py-5 flex flex-col items-end ${pathname === '/Menu' ? 'bg-[#F3CA89]/60 backdrop-blur-sm' : 'bg-emerald-900'} `}>
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
            <nav className={`z-50 w-screen fixed flex justify-between py-5 backdrop-blur-md ${pathname === '/Menu' ? '!text-neutral-700 ' : 'text-green-50'}`}>

                <div className="flex flex-col items-start px-3 sm:px-10">
                    <div className="flex flex-col items-center text-xs">
                        <Link href={'/'}>
                            <p className="font-extrabold text-xl lg:text-xl transition delay-75 hover:scale-110">Medrano's Taqueria</p>
                        </Link>
                        <div className="flex transition delay-75">
                            <img className="px-1 lg:p-1 " src="https://img.icons8.com/officexs/16/null/map-pin.png"/>
                            <a href={streetAddress_href} target='_blank' rel='noreferrer' className='hover:underline font-bold'>
                                <address>23955 Franz Rd. Katy, Texas 77493</address>
                            </a>
                        </div>
                        <div className="flex transition delay-75">
                            <img className="px-1" src="https://img.icons8.com/external-aficons-studio-detailed-outline-aficons-studio/17/FFFFFF/external-phone-call-food-delivery-aficons-studio-detailed-outline-aficons-studio.png"/>
                            <a href={phoneNumber_href}  className='font-bold hover:underline'>
                                281-670-4030
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute flex flex-col items-center left-60 sm:left-72 transition delay-75">
                    <p>Cash Only</p>
                    <p className="text-3xl">💵</p>
                </div>

                <div className=" backdrop-blur-md mr-2 absolute right-3">
                    <ul className="hidden md:flex md:backdrop-blur-md justify-around space-x-4">
                        {
                            navigationPages.map(({ to, linkName }: { to: string, linkName: string }) => <NavLinks key={to} to={to} linkName={linkName} pathname={pathname} /> )
                        }
                    </ul>
                </div>


                <div id="hamburger-button" className="z-50 flex relative w-8 h-10 flex-col justify-around scale-75 items-center md:hidden mr-3 cursor-pointer" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-[2px] w-full ${pathname === '/Menu' ? 'bg-neutral-600' : 'bg-green-50 rounded-lg'} transform transition duration-300 ease-in-out ${(open || open && pathname === '/Menu') ? " bg-neutral-600 rotate-45 translate-y-3.5" : null}`} />
                        <span className={`h-[2px] w-full ${pathname === '/Menu' ? 'bg-neutral-600' : 'bg-green-50 rounded-lg'} transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-[2px] w-full ${pathname === '/Menu' ? 'bg-neutral-600' : 'bg-green-50 rounded-lg'} transform transition duration-300 ease-in-out ${(open || open && pathname === '/Menu') ? "bg-neutral-600 -rotate-45 -translate-y-3.5" : null}`} />
                </div>
                <MobileNavbar pathname={pathname} open={open} />
            </nav>
    );
}