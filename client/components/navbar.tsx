import Link from "next/link"
import { useState } from "react"


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

const NavLinks = ({ to, linkName }: { to: string, linkName: string }) => <Link href={to}>{linkName}</Link>


const MobileNavbar = ({ pathname, open, setOpen }:  { pathname?: string, open: boolean, setOpen: Function }) => {
    return (
        <div className={`z-20 w-full py-4 fixed top-0 bg-white transform delay-75 ${open ? ' translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
            <div className="w-1/4">
                <p className="text-center">Logo</p>
            </div>

            <ul className="hidden 2xl:mr-20 w-2/5 md:flex justify-around">
                {
                    navigationPages.map(({ to, linkName }: { to: string, linkName: string }) => <NavLinks key={to} to={to} linkName={linkName} /> )
                }
            </ul>

            <button className="mx-2" onClick={() => setOpen((prevState?: boolean) => !prevState)}>
                close
            </button>
        </div>
    )
}

export default function Navbar(){
    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className={`w-full fixed flex justify-between py-4 ${!open && 'bg-transparent'}`}>
                <MobileNavbar open={open} setOpen={setOpen} />
                <div className="w-1/4">
                    <p className="text-center">Logo</p>
                </div>

                <ul className="hidden 2xl:mr-20 w-2/5 md:flex justify-around">
                    {
                        navigationPages.map(({ to, linkName }: { to: string, linkName: string }) => <NavLinks key={to} to={to} linkName={linkName} /> )
                    }
                </ul>

                <button className="block md:hidden mx-2" onClick={() => setOpen((prevState: boolean) => !prevState) }>
                    open
                </button>
            </nav>
        </>
    )
}