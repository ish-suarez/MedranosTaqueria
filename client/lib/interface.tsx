
export interface breakfastProps {
    category: string,
    items: {
        name: string,
        price: null
    }[],
    breakfastPlatters: {
        platterTitle: string,
        breakfastPlatesOptions: Array<any>
    }[]
}

export interface tacosProps {
    category: string, 
    tortillaOptions: Array<string>,
    tacoMeatOptions: Array<string>,
    extras: {
        extraName: string,
        price: number
    }[],
    items: {
        name: string, 
        ingredients: Array<string>,
        price: number,
        sizes: {
            size: string,
            sizePrice: number
        }[]
    }[]
}

export interface platterProps {
    category: string,
    items: {
        name: string,
        price: null,
        enchiladaMeatOptions: {
            enchiladaMeat: string,
            price: null
        }[]
    }[]
}

export interface menuProps {
    category: string,
    items: {
        name: string,
        ingredients?: Array<string>,
        price?: null,
        sizes?: {
            size?: string,
            sizePrice?: number
        }[],
        enchiladaMeatOptions?: {
            enchiladaMeat?: string,
            price?: null
        }[]
    }[],
    breakfastPlatters?: {
        platterTitle?: string,
        breakfastPlatesOptions?: Array<any>
    }[],
    tortillaOptions?: Array<string>,
    tacoMeatOptions?: Array<string>,
    extras?: {
        extraName?: string,
        price?: number
    }[],
}

