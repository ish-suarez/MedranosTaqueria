import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../navbar";

type Props = {
    children?: ReactNode
    title?: string
}

export default function Layout({children, title='Medranos Taqueria'}: Props) {
    return (
        <div className="w-full subpixel-antialiased">
            <Head>
                <title>{title}</title>
                <meta property="og:title" content="Medrano's Taqueria" key="title" />
                <meta property="og:description" content=">Medrano's Taquria brings you fresh and authentic flavors from our culture, to you. " />
                <meta name="keywords" content="Tacos, Quesadillas, Burritos, Street Tacos, Taco Truck, Culture, Caldos, Sopes, Medrano's, Taqueira" />
                <meta name="theme-color" content="#2D3142" />
            </Head>
            <Navbar />
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}