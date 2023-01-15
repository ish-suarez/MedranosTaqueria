import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

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
            className={`text-green-50 hover:underline hover:underline-offset-4 py-1 text-xl font-semibold ${to === pathname ? 'hidden' : null}`}>
                {linkName}
        </Link>
    );


const MobileNavbar = ({ pathname, open }:  { pathname: string, open: boolean }) => {
    return (
        <div className={`z-20 w-full pt-4 fixed top-0 bg-amber-500 transform delay-75 ${open ? ' translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
            <div className="flex flex-col w-full">
                <div className="flex flex-col items-center w-full">
                    <p className="text-center font-extrabold text-red-700 text-xl">Medrano's Taqueria</p>
                    <div className="flex flex-col items-center text-xs text-green-900">
                        <p className="font-extrabold ">Cash Only</p>
                        <a href={streetAddress_href} target='_blank' rel='noreferrer' className='hover:underline font-bold'>
                            <address>23955 Franz Rd. Katy, Texas 77493</address>
                        </a>
                        <a href={phoneNumber_href}  className='font-bold hover:underline'>
                            281-670-4030
                        </a>
                    </div>
                </div>

                <ul className="px-5 py-3 flex flex-col items-end bg-green-700/60">
                    {
                        navigationPages.map(({ to, linkName }: { to: string, linkName: string }) => <NavLinks key={to} to={to} linkName={linkName} pathname={pathname} /> )
                    }
                </ul>
            </div>

        </div>
    );
}

export default function Navbar(){
    const [open, setOpen] = useState(false);
    const {pathname} = useRouter();

    return (
        <>
            <nav className={`w-full fixed flex justify-between py-4 bg-amber-500`}>
                <MobileNavbar pathname={pathname} open={open} />
                <div className="flex flex-col items-center w-full">
                    <p className="text-center font-extrabold text-red-700 text-xl">Medrano's Taqueria</p>
                    <div className="flex flex-col items-center text-xs text-green-900">
                        <p className="font-extrabold ">Cash Only</p>
                        <a href={streetAddress_href} target='_blank' rel='noreferrer' className='hover:underline font-bold'>
                            <address>23955 Franz Rd. Katy, Texas 77493</address>
                        </a>
                        <a href={phoneNumber_href}  className='font-bold hover:underline'>
                            281-670-4030
                        </a>
                    </div>
                </div>

                <ul className="hidden 2xl:mr-20 w-2/5 md:flex justify-around">
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
            </nav>
        </>
    );
}