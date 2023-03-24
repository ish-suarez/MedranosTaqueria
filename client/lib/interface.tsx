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

