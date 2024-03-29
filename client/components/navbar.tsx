import Link from "next/link";
import { useRouter } from "next/router";
import { SetStateAction, useState, Dispatch } from "react";

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

const NavLinks = ({ to, linkName, pathname, setOpen }: { to: string, linkName: string, pathname: string, setOpen: Dispatch<SetStateAction<boolean>> }) => (
        <Link 
            href={to} 
            onClick={() => setOpen(prevState => !prevState)}
            className={`md:text-lg text-center transition h-min duration-300 border-b-0 py-1 md:text-center w-20 ${styles.linkUnderline} ${styles.linkUnderlineBlack} font-semibold ${to === pathname ? 'hidden' : null}  `}>
                {linkName}
        </Link>
    );

const MobileNavbar = ({ pathname, open, setOpen }:  { pathname: string, open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <div className={`md:hidden z-20 w-full fixed top-24 border-b-4 border-red-700 transform delay-75 ${open ? ' translate-x-0' : '-translate-x-full lg:hidden'} transition-transform duration-300 ease-in-out`}>
            <div className={`px-5 py-5 flex flex-col items-end  bg-emerald-900 `}>
                {
                    navigationPages.map(({ to, linkName }: { to: string, linkName: string, open?: boolean; setOpen?: Dispatch<SetStateAction<boolean>>}) => <NavLinks key={to} setOpen={setOpen} to={to} linkName={linkName} pathname={pathname} /> )
                }
            </div>
        </div>
    );
}

export default function Navbar(){
    const [open, setOpen] = useState(false);
    const {pathname} = useRouter();

    return (
            <nav className={`z-50 w-screen fixed flex justify-between py-5 backdrop-blur-md text-green-50`}>

                <div className="flex flex-col items-start px-3 sm:px-10">
                    <div className="flex flex-col items-center text-xs">
                        <Link href={'/'}>
                            <p className="font-extrabold text-xl lg:text-xl transition delay-75 hover:scale-110">Medrano's Taqueria</p>
                        </Link>
                        <div className="flex transition delay-75">
                            <p className="px-1 text-md">📍</p>
                            <a href={streetAddress_href} target='_blank' rel='noreferrer' className='hover:underline font-bold'> 
                                <address>23955 Franz Rd. Katy, Texas 77493</address>
                            </a>
                        </div>
                        <div className="flex transition delay-75">
                            <p className="px-1">📞</p>
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
                    <div className="hidden md:flex md:backdrop-blur-md justify-around space-x-4">
                        {
                            navigationPages.map(({ to, linkName }: { to: string, linkName: string}) => <NavLinks key={to} setOpen={setOpen} to={to} linkName={linkName} pathname={pathname} /> )
                        }
                    </div>
                </div>


                <div id="hamburger-button" className="z-50 flex relative w-8 h-10 flex-col justify-around scale-75 items-center md:hidden mr-3 cursor-pointer" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-[2px] w-full bg-green-50 rounded-lg transform transition duration-300 ease-in-out ${open  ? " bg-neutral-50 rotate-45 translate-y-3.5" : null}`} />
                        <span className={`h-[2px] w-full bg-green-50 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-[2px] w-full bg-green-50 rounded-lg transform transition duration-300 ease-in-out ${open  ? "bg-neutral-50 -rotate-45 -translate-y-3.5" : null}`} />
                </div>
                <MobileNavbar pathname={pathname} open={open} setOpen={setOpen} />
            </nav>
    );
}