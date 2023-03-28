import menuData from '../menus.json';

export function getMenu() {
    const menu = menuData.menu;

    return { menu } 

}

export const homePhotos = [{image: '/images/tacos.avif', alternate: 'taco plate'}, {image: '/images/burrito.avif', alternate: 'plate of burritos'} , {image: '/images/quesadillas.avif', alternate: 'plate of quesadilla'}, {image: '/images/sopes.avif', alternate: 'plate of sopes'}]

export const menuPreview = [
    {
      foodType: 'Breakfast Tacos'
    },
    {
      foodType: 'Burritos'
    },
    {
      foodType: 'Quesadillas'
    },
    {
      foodType: 'Gorditas'
    },
    {
      foodType: 'Sopes'
    },
    {
      foodType: 'Tortas'
    },
    {
      foodType: 'Huaraches'
    },
    {
      foodType: 'Aguas Frescas'
    }
  ]