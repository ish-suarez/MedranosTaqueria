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
                <link rel="shortcut icon" href="/favicon.ico" />
                {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/> */}
            </Head>
            <Navbar />
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}