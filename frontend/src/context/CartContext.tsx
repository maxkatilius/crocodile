import { createContext, useState, useEffect } from "react"

export type CartItem = {
    id: number
    title: string
    price: number
    qty: number
    imgUrl: string
    description: string
    color?: string
    size?: string
}

type CartContextType = {
    cart: CartItem[]
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
    cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

// create custom provider componenet so that all the local storage logic is handled in context - other components can just change the cart state
export const CartProvider = ({ children }: { children: React.ReactNode}) => {
    const [cart, setCart] = useState<CartItem[]>([])
    const [cartCount, setCartCount] = useState<number>(0)
    const [cartLoaded, setCartLoaded] = useState<boolean>(false)

    const updateCartCount = (cart: CartItem[]) => {
        let total = 0
        cart.forEach((item: CartItem) => {
            total += item.qty
        })
        setCartCount(total)
    }

    // if user already has a cart, set state to the user's cart
    useEffect(() => {
        const existingCart = localStorage.getItem("cart")
        if (existingCart) {
            const userCart = JSON.parse(existingCart)
            setCart(userCart)
            updateCartCount(userCart)
        }
        setCartLoaded(true)
    }, [])

    // whenever the user's cart changes, set localStorage to the new cart 
    useEffect(() => {
        if (cartLoaded) {
            updateCartCount(cart)
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, setCart, cartCount }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext