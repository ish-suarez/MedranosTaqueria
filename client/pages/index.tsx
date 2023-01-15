import Image from "next/image"
import BackgroundPic from '../public/images/taco_truck.jpeg'
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <div className="bg-green-600/30 ">
      <Navbar />
      <div className="h-screen flex flex-col justify-center">
        <Image
          priority
          className="h-[500px]"
          src={BackgroundPic}
          alt="Taco Truck"
        />

      </div>

    </div>
  )
}
