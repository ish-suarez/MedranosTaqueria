import Image from "next/image";
import Head from 'next/head';
import { getMenu } from '../lib/menuData'
import { menuProps } from "../lib/interface";

export async function getStaticProps() {
    const menu = getMenu();

    return { props: menu }
}


export default function Menu({menu}: {menu: Array<any>}) {
    const breakfastMenu = menu.filter(items => items.category.includes("Breakfast"))
    const tacosMenu = menu.filter(items => items.category.includes("Tacos"))
    const plattersMenu = menu.filter(items => items.category.includes("Platillos"))
    const soupMenu = menu.filter(items => items.category.includes("Caldo"))
    const tortasMenu = menu.filter(items => items.category.includes("Tortas"))
    
    return (
        <div>
            <Head>
                <title>Medrano's Menu</title>
                <meta property="og:title" content="Medrano's Menu" key='title' />
                <link rel="preload" as="image" href={'/images/taco_truck.avif'}></link>

            </Head>
            {/* Background Image Container */}
            <div className="fixed z-0 w-full h-screen">
                <Image 
                    priority
                    src={'/images/taco_truck.avif'} 
                    className='object-cover brightness-[.37] md:object-fill' 
                    fill 
                    alt="background picture"
                />
            </div>
            {/* Menu container */}
            <div className="w-full pt-[20vh] sm:pt-[25vh] md:pt-[20vh] z-40 absolute">
                <p className="text-4xl text-neutral-50 text-center font-extrabold py-2 pb-6 z-20">Menu</p> 
                <div className=" z-20">
                    {/* Breakfast Container */}
                    <div className="md:w-full">
                        {breakfastMenu.map(({category, items, breakfastPlatters}: menuProps) => (
                            <div className="text-center text-neutral-100"> 
                                <div className=" flex justify-center items-center ">
                                    <p className="text-2xl  text-center font-bold pt-3">{category.toUpperCase()}</p>
                                </div>
                                <div className="">
                                    <ul className="flex flex-col flex-wrap sm:items-center">
                                        {items.map(({name}) => <li className="font-light py-1 ">{name}</li>)}
                                    </ul>
                                    <div className="">
                                        {breakfastPlatters?.map(({platterTitle, breakfastPlatesOptions}) => (
                                            <div className="py-4 flex flex-col justify-center items-center">
                                                <p className="text-xl text-neutral-100 font-semibold rounded-md pt-2 w-4/5">{platterTitle?.toUpperCase()}</p>
                                                <ul className="flex flex-col pb-2">
                                                    {breakfastPlatesOptions?.map(option => <li className="font-light py-1 ">{option}</li>)}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Taco and The Rest of The Menu Container  */}
                    <div className=" text-neutral-100">
                        {tacosMenu.map(({category, tortillaOptions, tacoMeatOptions, items, extras}: menuProps) => (
                            <div className="flex flex-col items-center">
                                <div className=''>
                                    <p className="text-2xl text-neutral-100 text-center font-bold pt-3">{category.toUpperCase()}</p>
                                </div>
                                <div className="py-5 flex flex-wrap items-center w-full sm:max-w-xl space-y-4 ">
                                    {/* List of Meats Container */}
                                    <div className="w-full flex flex-col items-center justify-center">
                                        <p className="font-semibold text-lg text-center py-2 text-neutral-50">TACO MEATS</p>
                                        <ol className="flex flex-wrap items-center text-center px-1 py-3 sm:px-14 sm:max-w-lg md:px-5 sm:justify-center ">
                                            {tacoMeatOptions?.map(meat => <li className="text-lg text-left list-inside list-disc w-1/8 py-1 pl-3 font-light">{meat}</li>)}
                                        </ol>
                                    </div>
                                    {/* Tortilla Options */}
                                    <div className="w-1/2 flex flex-col justify-center items-center">
                                        <p className="font-semibold w-4/5 text-lg text-center py-2 rounded-md text-neutral-100">TORTILLA OPTIONS</p>
                                        <ul className="flex flex-col w-full justify-between items-center pb-3 ">
                                            {tortillaOptions?.map(tortilla => <li className="text-lg sm:text-xl text-center w-full font-light">{tortilla}</li>)}
                                        </ul>
                                    </div>
                                    {/* Extras */}
                                    <div className="w-1/2 flex flex-col items-center">
                                        <p className="font-semibold w-4/5 text-lg text-center py-2 rounded-md text-neutral-100">EXTRAS</p>
                                        <ul className="flex flex-col w-full justify-around items-center pb-3">
                                            {extras?.map(({extraName, price}) => <li className="text-lg font-light">{extraName}</li>)}
                                        </ul>  
                                    </div>
                                    {/* The Rest of The Menu */}
                                    <div className="w-full py-5">
                                        <p className="text-xl text-center font-bold py-2 text-neutral-50">LO DE MAS</p>
                                        <ul className="w-full flex flex-wrap flex-col sm:items-center py-3">
                                            {items.map(({name, ingredients, price, sizes}) => (
                                                <li className="w-full flex flex-col items-center py-4 px-5 md:w-2/3 md:max-w-xl sm:max-w-lg">
                                                    <div className="flex justify-between items-center w-full">
                                                        <p className="text-lg self-start font-extrabold py-1 text-neutral-50">{name.toUpperCase()}</p>
                                                        {/* Sizes and Price */}
                                                        <div className={`w-1/3 ${!sizes ? 'hidden' : 'text-center flex space-x-2 items-center md:justify-end'}`}>
                                                            {sizes?.map(({size, sizePrice}) => (
                                                                <div className="flex space-x-1 font-light">
                                                                    <span>{size}:</span><span className="font-mono">${sizePrice}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {/* Price for Gordita without sizes */}
                                                        <div className={`${!price ? 'hidden' : 'flex py-1 px-2 md:w-1/3 md:justify-end'}`} >
                                                            <span className="font-mono">${price}</span>
                                                        </div>
                                                    </div>
                                                    {/* Ingredients Container */}
                                                    <ul className="flex items-center justify-center w-full">
                                                        <li className="w-full flex ">
                                                            <div className="py-2 px-3 w-full backdrop-blur-sm">
                                                                <p className="text-sm underline underline-offset-1 font-semibold">Ingredients</p>
                                                                <ul className="flex flex-wrap py-1 px-1 justify-start w-full">
                                                                    {ingredients?.map((ingredient, i) => <li className=" list-inside text-xs font-light ">{(i ? ', ' : '') + ingredient}</li>)}
                                                                </ul>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Special Platters Container */}
                    <div className="py-10 ">
                        {plattersMenu.map(({category, items}: menuProps) => (
                            <div className="w-full">
                                <p className="text-2xl text-neutral-50 text-center font-bold py-2">{category.toUpperCase()}</p>
                                <ul className="py-5 flex flex-col items-center text-center flex-wrap text-neutral-100">
                                    {items.map(({name, enchiladaMeatOptions}) => (
                                        <li className="text-xl py-1 ">
                                            <p className="mt-2 text-lg font-light">{name}</p>
                                            <div className={`${!enchiladaMeatOptions ? 'hidden' : 'block rounded-md py-1 px-2'}`}>
                                                <p className="text-sm text-neutral-50 font-bold">Enchilada Meat Options</p>
                                                <ul className={`flex py-2`}>
                                                    {enchiladaMeatOptions?.map(({enchiladaMeat}) => <li className="w-1/2 text-sm text-center">{enchiladaMeat}</li>)}
                                                </ul>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* Soup Container */}
                    <div className="py-10">
                        {soupMenu.map(({category, items}: menuProps) => (
                            <div className="">
                                <p className="text-2xl text-neutral-50 text-center font-bold pt-2  ">{category.toUpperCase()}</p>
                                <ul className="py-2 flex flex-col items-center text-neutral-100">
                                    {items.map(({name}) => <li className="py-1 font-light text-lg">{name}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* Tortas Container */}
                    <div className="py-10">
                        {tortasMenu.map(({category, items}: menuProps) => (
                            <div className="">
                                <p className="text-2xl text-neutral-50 text-center font-bold pt-2">{category.toUpperCase()}</p>
                                <ul className="py-4 flex flex-col items-center text-neutral-100">
                                    {items.map(({name}) => <li className="py-1 font-light text-lg">{name}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}