import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../navbar";

type Props = {
    children?: ReactNode
    title?: string
}

export default function Layout({children, title='Medranos'}: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}