import {createContext} from 'react'

export const CartContext = createContext({
    items: [],
    addItem: () => {}, //Not to use but help with auto-completion 
    updateItem: () => {},
});