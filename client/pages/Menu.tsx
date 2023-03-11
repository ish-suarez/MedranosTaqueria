import { useState } from "react";
import Navbar from "../components/navbar"
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
    


    return (
        <div className="w-full pt-[20vh]">
            <p className="text-3xl text-white text-center font-extrabold py-2 pb-6">Menu</p>
            <div>
                {/* Breakfast Container */}
                {breakfastMenu.map(({category, items, breakfastPlatters}: breakfastProps) => (
                    <div className="text-center text-white"> 
                        <p className="text-3xl text-center font-bold bg-black py-2">{category}</p>
                        <div className="bg-slate-600">
                            <ul className="flex flex-col py-2">
                                {items.map(({name}) => <li className="text-lg py-1">{name}</li>)}
                            </ul>
                            {breakfastPlatters.map(({platterTitle, breakfastPlatesOptions}) => (
                                <div className="py-4 flex flex-col justify-center items-center">
                                    <p className="text-xl font-semibold bg-black rounded-md py-2 w-4/5">{platterTitle}</p>
                                    <ul className="flex flex-col py-2">
                                        {breakfastPlatesOptions.map(option => <li className="text-lg py-1">{option}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* Taco Container */}
            <div className="text-white py-10">
                {tacosMenu.map(({category, tortillaOptions, tacoMeatOptions, items, extras}: tacosProps) => (
                    <div className="">
                        <p className="text-3xl text-center font-bold bg-black py-2">{category}</p>
                        <div className="py-10 flex flex-col items-center w-full space-y-4 bg-slate-600">
                            <div className="w-full flex flex-col justify-center items-center">
                                <p className="font-semibold bg-black w-4/5 text-xl text-center py-2 rounded-md">Tortilla Options</p>
                                <ul className="flex w-full justify-between items-center py-3 ">
                                    {tortillaOptions.map(tortilla => <li className="text-lg text-center w-full">{tortilla}</li>)}
                                </ul>
                            </div>
                            <div className="w-full flex flex-col items-center">
                                <p className="font-semibold bg-black w-4/5 text-xl text-center py-2 rounded-md">Taco Meats</p>
                                <ul className="flex flex-wrap items-center justify-around text-center px-1 py-3">
                                    {tacoMeatOptions.map(meat => <li className="text-lg w-1/2 py-1">{meat}</li>)}
                                </ul>
                            </div>
                            <div className="w-full flex flex-col items-center">
                                <p className="font-semibold bg-black w-4/5 text-xl text-center py-2 rounded-md">Extras</p>
                                <ul className="flex w-full justify-around items-center py-3">
                                    {extras.map(({extraName, price}) => <li className="text-lg py-1">{extraName}</li>)}
                                </ul>
                            </div>
                            <div className="w-full">
                                <p className="text-2xl text-center font-bold bg-black py-2">Lo de Mas</p>
                                <ul className="w-full flex flex-wrap flex-col py-3">
                                    {items.map(({name, ingredients, price, sizes}) => (
                                        <li className="w-full flex flex-col items-center py-4 px-5">
                                            <p className="text-2xl self-start font-extrabold py-1">{name}</p>
                                            <ul className="flex items-center justify-center">
                                                <li className="w-full flex px-4">
                                                    <div className=" flex flex-row-reverse items-center w-full py-1 bg-slate-800 rounded-md px-4" >
                                                        <div className={`w-1/3 ${!sizes ? 'hidden' : 'text-center flex flex-col items-center'}`}>
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
                                                        <div className="py-2 px-3">
                                                            <p className="text-sm underline underline-offset-1 font-semibold">Ingredients</p>
                                                            <ol className="flex flex-wrap py-1 px-2 justify-start">
                                                                {ingredients.map(ingredient => <li className=" list-inside px-1 text-xs font-light ">{ingredient}</li>)}
                                                            </ol>
                                                        </div>
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
            <div className="py-10 text-white">
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
            <div className="py-10 text-white">
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
            <div className="py-10 text-white">
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