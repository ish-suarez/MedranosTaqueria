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
                <link rel="icon" href="/images/favicons/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/images/favicons/site.webmanifest" />
                <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="keywords" content="Tacos, Quesadillas, Burritos, Street Tacos, Taco Truck, Culture, Caldos, Sopes, Medrano's, Taqueira" />
                <meta property="og:description" content=">Medrano's Taquria brings you fresh and authentic flavors from our culture, to you. " />
                <meta name="theme-color" content="#2D3142" />
            </Head>
            <Navbar />
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}