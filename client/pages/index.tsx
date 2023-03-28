import Image from "next/image"
import Head from 'next/head'
import Link from "next/link"
import Footer from "../components/Footer"
import styles from '../styles/Home.module.css'
import {menuPreview, homePhotos} from '../lib/menuData'

const backgroundPic = '/images/taco_truck.avif';

export default function Home() {
  return (
    <div className='w-full'>
      <Head>
        <title>Medrano's Taqueria</title>
        <meta property="og:title" content="Medrano's Taqueria" key="title" />
        <meta name="theme-color" content="#2D3142" />
      </Head>
      {/* Background Image Container */}
      <div className={` fixed -z-10 w-full h-screen`}>
        <Image
          priority
          className=" opacity-95 brightness-50 blur-md object-cover md:object-fill"
          src={backgroundPic as string}
          quality={100}
          fill
          placeholder="blur"
          blurDataURL={'/images/taco_truck.jpeg'}
          alt="Taco Truck"
        />
      </div>
      {/* Home page Content */}
      <div className={`flex flex-col items-center ${styles.content}`}>
        <div className=" mt-[20vh] sm:mt-[20vh] py-10 flex flex-col">
          <div className={`${styles.ani}`}>
            <div className="flex relative flex-col max-w-md sm:ml-20 xl:max-w-2xl xl:ml-40">
                <h1 className={`text-5xl md:text-6xl lg:text-7xl text-green-50 font-extrabold`}>Street Tacos</h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl ml-14 text-green-50 font-extrabold">Y mucho mas</h2>
                <div className="flex relative ml-24 w-64 md:w-full text-center space-x-2 my-3 text-lg md:text-xl lg:text-2xl font-bold text-green-50">
                  <Link href={'/Menu'} className="absolute left-0 bg-emerald-800 border-r-2 border-b-2 border-green-50 rounded cursor-pointer transform duration-100 hover:scale-110 hover:z-10 hover:border-none hover:shadow hover:shadow-white py-2 w-1/2">See our menu</Link>
                  <Link href={'/AboutUs'} className="absolute right-0 bg-amber-500 brightness-95 border-r-2 border-b-2 border-amber-100 text-zinc-100 rounded cursor-pointer transform duration-100 hover:scale-110 hover:border-none hover:shadow hover:shadow-white hover:z-10 py-2 w-1/2">About us</Link>
                </div>
            </div>
          </div>
          <ul className="text-green-100 w-full list-disc list-inside bg-zinc-900/50 xl:bg-transparent p-2 mt-40 my-2 shadow-sm flex flex-wrap justify-center text-sm 
                          sm:px-20 sm:py-5 
                          md:mt-48
                          lg:px-36 lg:mt-56
                          xl:px-52">
            {
              menuPreview.map(({foodType}: {foodType: string}, i) => (
                  <li key={foodType as string} className=" my-1 font-semibold md:text-lg lg:text-xl text-center mx-1">
                    {foodType}
                  </li>
              ))
            }
          </ul>
        </div>
        {/* Images Section */}
        <div className="flex justify-center flex-wrap w-full max-w-sm sm:max-w-xl md:max-w-2xl py-10">
          {homePhotos.map(({image, alternate}: {image: string, alternate: string}, i) => (
            <div key={i} className=" overflow-hidden sm:h-44 sm:w-1/2 md:h-52 md:w-1/2">
              <Image priority src={image as string} width={370} height={200} alt={alternate} />
            </div>
          ) 
          )}
        </div>
        {/* Footer Component */}
        <Footer />
      </div>
    </div>
  )
}
