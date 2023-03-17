import { useState } from "react";
import Image from "next/image";
import { getMenu } from '../lib/menuData'
import { breakfastProps, tacosProps, platterProps, menuProps } from "../lib/interface";


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
    
        //   {/* Background Image Container */}
        //   <div className={` fixed -z-10 w-full h-screen`}>
        //   <Image
        //     priority
        //     className=" opacity-95 brightness-50 blur-[2px] object-cover"
        //     src={backgroundPic as string}
        //     quality={100}
        //     fill
        //     placeholder="blur"
        //     blurDataURL={'/images/taco_truck.jpeg'}
        //     alt="Taco Truck"
        //   />
        // </div>


    return (
        <div>
            <div className="fixed z-0 w-full h-screen">
                <Image 
                    src={'/images/menu_back.avif'} 
                    className='object-cover brightness-90' 
                    fill 
                    alt="background picture"
                />
            </div>
            <div className="w-full pt-[20vh] sm:pt-[30vh] md:pt-[20vh] z-40 absolute">
                <p className="text-3xl text-neutral-700 text-center font-extrabold py-2 pb-6 z-20">Menu</p>
                <div className=" z-20">
                    {/* Breakfast Container */}
                    <div className="md:w-full">
                        {breakfastMenu.map(({category, items, breakfastPlatters}: breakfastProps) => (
                            <div className="text-center md:flex md:justify-center"> 
                                <div className=" flex justify-center items-center ">
                                    <p className="text-2xl text-neutral-600 text-center font-bold pt-3">{category}</p>
                                </div>
                                <div className="md:flex md:flex-row-reverse md:py-5">
                                    <ul className="flex flex-col flex-wrap sm:flex-row sm:items-center sm:justify-center sm:px-16  md:w-1/2 md:text-center">
                                        {items.map(({name}) => <li className="font-light py-1 sm:w-1/2 md:w-full md:border-b-2 md:border-slate-500">{name}</li>)}
                                    </ul>
                                    <div className="md:w-1/2">
                                        {breakfastPlatters.map(({platterTitle, breakfastPlatesOptions}) => (
                                            <div className="py-4 flex flex-col justify-center items-center">
                                                <p className="text-2xl text-neutral-600 font-semibold rounded-md pt-2 w-4/5 sm:w-1/2 md:w-2/3">{platterTitle}</p>
                                                <ul className="flex flex-col pb-2">
                                                    {breakfastPlatesOptions.map(option => <li className="font-light py-1 md:border-b-2 md:border-slate-500">{option}</li>)}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Taco Container */}
                    <div className=" ">
                        {tacosMenu.map(({category, tortillaOptions, tacoMeatOptions, items, extras}: tacosProps) => (
                            <div className="md:flex">
                                <div className=' md:flex md:py-52 md:w-1/4'>
                                    <p className="text-2xl text-neutral-600 text-center font-bold pt-3">{category}</p>
                                </div>
                                <div className="py-10 flex flex-wrap items-center w-full space-y-4 ">
                                    <div className="w-full flex flex-col items-center">
                                        <p className="font-semibold w-4/5 sm:w-1/2 text-xl text-center py-2 text-neutral-700">Taco Meats</p>
                                        <ol className="flex flex-wrap items-center text-center px-1 py-3 sm:px-14">
                                            {tacoMeatOptions.map(meat => <li className="text-lg text-left list-inside list-disc w-1/2 py-1 pl-3 font-light">{meat}</li>)}
                                        </ol>
                                    </div>
                                    <div className="w-1/2 flex flex-col justify-center items-center">
                                        <p className="font-semibold w-4/5 sm:w-1/2 text-xl text-center py-2 rounded-md text-neutral-700">Tortilla Options</p>
                                        <ul className="flex flex-col w-full justify-between items-center pb-3 ">
                                            {tortillaOptions.map(tortilla => <li className="text-lg sm:text-xl text-center w-full font-light">{tortilla}</li>)}
                                        </ul>
                                    </div>
                                    <div className="w-1/2 flex flex-col items-center">
                                        <p className="font-semibold w-4/5 sm:w-1/2 text-xl text-center py-2 rounded-md text-neutral-700">Extras</p>
                                        <ul className="flex flex-col w-full justify-around items-center pb-3">
                                            {extras.map(({extraName, price}) => <li className="text-lg font-light">{extraName}</li>)}
                                        </ul>
                                    </div>
                                    <div className="w-full py-5">
                                        <p className="text-2xl text-center font-bold py-2 text-neutral-600">Lo de Mas</p>
                                        <ul className="w-full flex flex-wrap flex-col sm:items-center py-3">
                                            {items.map(({name, ingredients, price, sizes}) => (
                                                <li className="w-full sm:w-2/3 flex flex-col items-center py-4 px-5">
                                                    <div className="flex justify-between items-center w-full">
                                                        <p className="text-2xl self-start font-extrabold py-1 text-neutral-700">{name}</p>
                                                        <div className={`w-1/3 ${!sizes ? 'hidden' : 'text-center flex space-x-2 items-center'}`}>
                                                            {sizes?.map(({size, sizePrice}) => (
                                                                <div className="flex space-x-1 font-light">
                                                                    <span>{size}:</span><span className="font-mono">${sizePrice}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {/* Price */}
                                                        <div className={`${!price ? 'hidden' : 'block py-1 px-2'}`} >
                                                            <span className="font-mono">${price}</span>
                                                        </div>
                                                    </div>
                                                    <ul className="flex items-center justify-center w-full">
                                                        <li className="w-full flex ">
                                                                <div className="py-2 px-3 w-full backdrop-blur-sm">
                                                                    <p className="text-sm underline underline-offset-1 font-semibold">Ingredients</p>
                                                                    <ul className="flex flex-wrap py-1 px-1 justify-start w-full">
                                                                        {ingredients.map((ingredient, i) => <li className=" list-inside text-xs font-light ">{(i ? ', ' : '') + ingredient}</li>)}
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
                    <div className="py-10 text-white md:w-1/2 ">
                        {plattersMenu.map(({category, items}: platterProps) => (
                            <div className="w-full">
                                <p className="text-3xl text-center font-bold bg-black py-2">{category}</p>
                                <ul className="py-5 bg-slate-600 flex flex-col items-center text-center flex-wrap ">
                                    {items.map(({name, enchiladaMeatOptions}) => (
                                        <li className="text-xl py-2 ">
                                            <p className="my-2 text-lg">{name}</p>
                                            <div className={`${!enchiladaMeatOptions ? 'hidden' : 'block bg-slate-900 rounded-md py-1 px-2'}`}>
                                                <p className="text-sm font-bold pt-4">Enchilada Meat Options</p>
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
                    <div className="py-10 text-white md:w-1/2">
                        {soupMenu.map(({category, items}: menuProps) => (
                            <div className="">
                                <p className="text-3xl text-center font-bold bg-black py-2">{category}</p>
                                <ul className="bg-slate-600 py-4 flex flex-col items-center ">
                                    {items.map(({name}) => <li className="py-2 text-lg">{name}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* Tortas Container */}
                    <div className="py-10 text-white md:w-1/2">
                        {tortasMenu.map(({category, items}: menuProps) => (
                            <div className="">
                                <p className="text-3xl text-center font-bold bg-black py-2">{category}</p>
                                <ul className="bg-slate-600 py-4 flex flex-col items-center ">
                                    {items.map(({name}) => <li className="py-2 text-lg">{name}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


// {menu.map(({category, items, tortillaOptions, tacoMeatOptions, extras}: {category: string, items: Array<any>, tortillaOptions?: Array<any>, tacoMeatOptions?: Array<any>, extras?: Array<any>}) => (
//     <div className="flex flex-col justify-center items-center">
//         <h2 className="text-xl font-serif font-bold py-2">
//             {category}
//         </h2>
//         {tortillaOptions ? 
//             <div className="flex w-full justify-center items-center">
//                 <div className="w-1/2 flex flex-col justify-center items-center">
//                     <p>Tortilla Options</p>
//                     <ul className="flex w-1/2 justify-between">
//                         {tortillaOptions?.map(tortilla => <li className="text-lg">{tortilla}</li>)}
//                     </ul>
//                 </div>
//                 <div className="w-1/2 flex flex-col justify-center items-center">
//                     <p>Extras</p>
//                     <ul className="flex w-4/5 justify-between">
//                         {extras?.map(extra => <li className="text-lg">{extra.extraName}</li>)}
//                     </ul>
//                 </div>

//             </div> 
//         : null 
//         }
//         {
//             tacoMeatOptions ? 
//                 <ol className="flex flex-wrap w-1/2 justify-center py-3">
//                     {tacoMeatOptions?.map(meat => <li className="">{meat}</li>)}
//                 </ol>
//                 : null

//         }
//         <div className="flex flex-wrap justify-center w-2/3 items-center">
//             {items.map(({
//                 name,
//                 price,
//                 breakfastPlatesOptions,
//                 enchiladaMeatOptions,
//                 ingredients,
//                 sizes
//             } : {
//                 name: string,
//                 price?: any,
//                 breakfastPlatesOptions?: Array<any>,
//                 enchiladaMeatOptions?: Array<any>,
//                 ingredients?: Array<any>,
//                 sizes?: Array<any>
//             }, i) => (
//                 <section key={i} className="">
//                     <p className="py-1 font-light font-serif">{name}</p>
//                     {enchiladaMeatOptions?.map(({enchiladaMeat, price}: {enchiladaMeat: string, price: any}) => <>{enchiladaMeat}</>)}
//                     {breakfastPlatesOptions?.map(breakOption => breakOption)}
//                     {ingredients?.map(ingredient => ingredient)}
//                     {sizes?.map(({size, sizePrice}: {size: string, sizePrice: Number}) => (
//                         <>
//                             {size} - {sizePrice}
//                         </>
//                     ))}
//                 </section>
//             ))}
//         </div>
//     </div>
// ))}