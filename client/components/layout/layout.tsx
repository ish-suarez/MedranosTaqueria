import { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../navbar";

type Props = {
    children?: ReactNode
    title?: string
}

export default function Layout({children}: Props) {
    return (
        <div className="w-full subpixel-antialiased">
            <main className="w-full">
                <Navbar />
                {children}
            </main>
        </div>
    )
}