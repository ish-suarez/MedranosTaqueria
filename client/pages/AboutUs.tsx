import Image from "next/image"
import Head from "next/head"
import Footer from "../components/Footer"
const backgroundPic = '/images/taco_truck.avif'


export default function AboutUs() {
    return (
        <div className=" w-full">
            <Head>
                <title>Medrano's Taqueria - About Us</title>
                <meta property="og:title" content="Medrano's Taqueria - About Us" key='title' />
                <meta name="description" content="Enjoy the flavors of our culture in Katy, Texas." />
                <meta name="og:description" content="Street Tacos, Enchiladas, Breakfast, Caldos, Tortas and so much more! Come visit us in Katy, Texas." />

            </Head>
            <div className="pt-28 sm:pt-40 md:pt-36 w-full flex flex-col justify-center items-center absolute">
                <div className="w-full flex flex-col items-center lg:flex-row lg:max-w-6xl lg:bg-neutral-800/80 lg:backdrop-blur lg:justify-end lg:mt-20 lg:mb-40 2xl:w-4/6 2xl:my-20">
                    <section className=" text-neutral-50 flex justify-center flex-col p-3 w-full bg-neutral-800/80 sm:max-w-xl sm:rounded-t-md md:max-w-xl md:px-5 lg:px-20 lg:bg-transparent xl:px-5 ">
                        <div className=" flex flex-col py-5">
                            <h3 className="  text-neutral-50 font-bold">About Us</h3>
                            <p className="font-light text-center md:px-10">Medrano's Taqueria brings you fresh and authentic flavors from our culture, to you. </p>
                        </div>
                        <div className="flex flex-col py-5">
                            <h4 className="text-neutral-50 font-bold">Days and Hours</h4>
                            <div className="self-center flex flex-col items-center font-light">
                                <p>Monday - Saturday</p>
                                <p>6AM - 10PM</p>
                            </div>
                
                        </div>
                    </section>
                    <section className=" w-full flex justify-center items-center 2xl:w-2/ 2xl:justify-end">
                        <Image className="shadow-lg shadow-neutral-50/30 sm:rounded-b-md sm:max-w-xl 2xl:max-w-2xl  md:rounded-b-md" priority src={backgroundPic} height={950} width={950} alt='taco truck in parking lot' />
                    </section>

                </div>

                <Footer />
            </div>
        </div>
    )
}