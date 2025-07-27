import { useContext } from "react"
import { Link } from "react-router-dom"
import CartContext, { CartItem } from "../context/CartContext"
import CartProduct from "../components/CartProduct"

const Cart = () => {
  
  const context = useContext(CartContext)
  if (!context) throw new Error("CartContext must be used within a CartProvider")
  const { cart, cartCount } = context

  let totalCost = 0

  const cartProductEls = cart.map((cartItem: CartItem, idx) => {  
    const q = cartItem.qty
    const p = cartItem.price
    totalCost += (p * q)
    totalCost = Math.floor(totalCost * 100) / 100

    return (
      <CartProduct 
        key={idx}
        cartItem={cartItem}
      />
    )
  })

  return (
    <main className={`cart-container ${cartCount === 0 ? "empty" : ""}`}>
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty!</p>
          <Link to="/shop" className="link-shop">Go to Shop!</Link>
        </div>
      ) : (
      <>
        {cartProductEls}
        <p className="subtotal">Subtotal ({cartCount} items): ${totalCost}</p>
        <div className="links-container">
          <Link to="/shop" >
            <span className="arrow left" />
            <span className="button-text">Shop</span>
          </Link>
          <Link to="/checkout" >
            <span className="button-text">Checkout</span>
            <span className="arrow right" />
          </Link>
        </div>
      </>
    )}
    </main>
  )
}

export default Cart