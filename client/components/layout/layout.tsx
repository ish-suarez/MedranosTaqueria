import { ReactNode } from "react";
import Head from "next/head";
import Image from 'next/image';
import Navbar from "../navbar";
const backgroundPic = '/images/taco_truck.avif';


type Props = {
    children?: ReactNode
    title?: string
}

export default function Layout({children}: Props) {
    return (
        <div className="w-full subpixel-antialiased">
            <div className="w-full">
                <Navbar />
                      {/* Background Image Container */}
                <div className={` fixed -z-10 w-full h-screen`}>
                    <Image
                    priority
                    className=" opacity-95 brightness-50 blur-md object-cover md:object-fill"
                    src={backgroundPic as string}
                    quality={100}
                    fill
                    placeholder="blur"
                    blurDataURL={'/images/taco_truck.avif'}
                    alt="Taco Truck"
                    />
                </div>
                {children}
            </div>
        </div>
    )
}