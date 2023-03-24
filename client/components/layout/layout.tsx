import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../navbar";

type Props = {
    children?: ReactNode
    title?: string
}

export default function Layout({children, title='Medranos Taqueria'}: Props) {
    return (
        <div className="w-full">
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <main className="w-full">
                {children}
            </main>
        </div>
    )
}