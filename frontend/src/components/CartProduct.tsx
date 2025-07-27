import { useContext } from "react"
import CartContext, { CartItem } from "../context/CartContext"
import { RiDeleteBin6Line } from "react-icons/ri"
import { LuPlus, LuMinus } from "react-icons/lu"

const CartProduct = ({ cartItem }: { cartItem: CartItem }) => {

    const { title, price, imgUrl, qty, color, size } = cartItem

    const context = useContext(CartContext)
    if (!context) throw new Error("CartContext must be used within a CartProvider")
    const { cart, setCart } = context
    
    const handleDeleteItem = (e: React.MouseEvent) => {
        e.preventDefault()

        let updatedCart: CartItem[];
        
        updatedCart = cart.filter(item =>
            !(
                item.title === title &&
                (item.color ?? null) === (color ?? null) &&
                (item.size ?? null) === (size ?? null)
            )
        )
        setCart(updatedCart)
    }

    const handleChangeCartItemCount = (e: React.MouseEvent<SVGElement, MouseEvent>, num: number) => {
        e.preventDefault()

        let updatedCart: CartItem[];

        // If item exists increment the quantity
        updatedCart = cart.map(item =>
            item.title === title &&
            (!color || item.color === color) &&
            (!size || item.size === size)
            ? { ...item, qty: item.qty + num }
            : item
        )

        setCart(updatedCart)
    }

    return (
        <div className="cart-product-card">
            <img src={imgUrl} alt={title}/>
            <div className="cart-product-card-info">
                <div className="title">
                    <h4>{title}</h4>
                    <p>${price}</p>
                </div>
                <p className="variant-details">{color && color}{size && ` - ${size}`}</p>
                <div className="cart-product-ctrls">
                    {qty > 1 ? (
                        <div className="ctrl-container minus">
                            <LuMinus onClick={(e) => handleChangeCartItemCount(e, -1)} />
                        </div>
                    ) : (
                        <div className="ctrl-container delete">
                            <RiDeleteBin6Line 
                            onClick={handleDeleteItem} 
                            />
                        </div>
                    )}
                    <div className="ctrl-container">
                        <p>{qty}</p>
                    </div>
                    <div className="ctrl-container plus">
                        <LuPlus onClick={(e) => handleChangeCartItemCount(e, 1)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct