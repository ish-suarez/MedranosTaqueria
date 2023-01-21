import Image from "next/image"
import Link from "next/link"
import BackgroundPic from '../public/images/taco_truck.jpeg'
import Navbar from "../components/navbar"

import styles from '../styles/Home.module.css'

const menuPreview = [
  {
    foodType: 'Breakfast Tacos',
    foodPic: '/images/taco-plate.jpg'
  },
  {
    foodType: 'Burritos',
    foodPic: '/images/burrito-mobile.png'
  },
  {
    foodType: 'Quesadillas',
    foodPic: '/images/quesadillas.jpg'
  },
  {
    foodType: 'Gorditas',
    foodPic: '/images/gordita.webp'
  },
  {
    foodType: 'Sopes',
    foodPic: '/images/sopes.jpeg'
  },
  {
    foodType: 'Tortas',
    foodPic: '/images/tortas.webp'
  },
  {
    foodType: 'Huaraches',
    foodPic: '/images/huaraches.jpeg'
  },
  {
    foodType: 'Aguas Frescas',
    foodPic: '/images/aguas-frescas.jpeg'
  }
]

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <div className="fixed -z-10 w-screen h-screen">
        <Image
          priority
          className=" object-right opacity-95 brightness-50"
          src={BackgroundPic}
          quality={100}
          fill
          alt="Taco Truck"
        />
      </div>
      <div className="flex justify-center ">
        <div className=" mt-[30vh] w-full px-5 py-10 flex flex-col ">
          <div className={styles.ani}>
            <div className="flex relative flex-col max-w-md ">
                <h1 className={`text-5xl text-green-50 font-extrabold`}>Street Tacos</h1>
                <h2 className="text-3xl ml-14 text-green-50 font-extrabold">Y mucho mas</h2>
                <div className="flex relative ml-24 w-64 text-center space-x-2 my-3 text-lg font-bold text-green-50">
                  <Link href={'/Menu'} className="absolute left-0 bg-emerald-800 border-r-2 border-b-2 border-green-100 rounded cursor-pointer transform duration-100 hover:scale-110 hover:z-10 hover:border-none hover:shadow hover:shadow-white py-2 w-1/2">See our menu</Link>
                  <Link href={'/AboutUs'} className="absolute right-0 bg-amber-500 border-r-2 border-b-2 border-amber-100 rounded cursor-pointer transform duration-100 hover:scale-110 hover:border-none hover:shadow hover:shadow-white hover:z-10 py-2 w-1/2">About us</Link>
                </div>
            </div>
          </div>
          <ul className="text-green-100 w-full bg-zinc-900/50 p-2 mt-40 my-2 rounded-md shadow-sm flex flex-wrap justify-center text-sm ">
            {
              menuPreview.map(({foodType, foodPic}: {foodType: string, foodPic: string}) =>(
                  <li key={foodType} className=" my-1 font-light text-center ">
                    {foodType}
                    <Image priority className=" ob" src={foodPic} width={85} height={75} alt={foodType} />
              
                  </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
