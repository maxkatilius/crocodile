import { useState, useEffect, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import CartContext from "../context/CartContext"

const Checkout = () => {
  
  const [personalDetails, setPersonalDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  })
  const [shippingDetails, setShippingDetails] = useState({
    address: "",
    city: "",
    postcode: ""
  })

  const [status, setStatus] = useState<number>(1)  
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
  const [nextDisabled, setNextDisabled] = useState<boolean>(true)
  const [orderId, setOrderId] = useState<number | null>(null)

  const navigate = useNavigate()

  const context = useContext(CartContext)
  if (!context) throw new Error("CartContext must be used within a CartProvider")
  const { cart, setCart } = context

  useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth)
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

  useEffect(() => {
    if (status === 0) {
      navigate('/cart')
    }
  }, [status])

  useEffect(()=> {
    switch (status) {
      case 1:
        setNextDisabled(!(personalDetails.fname && personalDetails.lname && personalDetails.email && personalDetails.phone))
        break
      case 2:
        setNextDisabled(!(shippingDetails.address && shippingDetails.city && shippingDetails.postcode))
        break
      default:
        setNextDisabled(false)
      }
  }, [status, personalDetails, shippingDetails])

  const handleSubmit = async (e: React.FormEvent) : Promise<void> => {

    e.preventDefault()
    const { fname, lname, email, phone } = personalDetails
    const { address, city, postcode } = shippingDetails
    
    // POST transaction to database
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/order`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          customerDetails: { fname, lname, email, phone, address, city, postcode},
          cart: cart
        })
      })

      const data = await response.json()
      if (data.orderId) {
        setOrderId(data.orderId)
      }

      if (!(response.ok)) {
        alert('Transaction failed: ' + data.error)
      }

    } catch (error) {
      console.error('Error adding transaction to database: ', error)
    }
    
    setCart([])
  }

  // HTML Elements
  const checkoutStatusBar = (
    <div className="checkout-status-bar">
      <div className={`status-container one ${screenWidth > 480 ? "grow" : ""}`}>
        <span>{status > 1 ? "✓" : "1"}</span> 
        <p>Personal Details</p>
        {screenWidth > 480 ? <span className="hr"></span> : ""}
      </div>
      <div className={`status-container two ${screenWidth > 550 ? "grow" : "shrink"}`}>
        <span className={`${status < 2 ? "incomplete" : ""}`}>{status > 2 ? "✓" : "2"}</span>
        <p>Shipping Address</p>
        {screenWidth > 550 ? <span className="hr"></span> : ""}
      </div>
      <div className={`status-container three ${screenWidth > 480 ? "grow" : ""}`}>
        <span className={`${status < 3 ? "incomplete" : ""}`}>{status > 3 ? "✓" : "3"}</span>
        <p>Confirm</p>
         {screenWidth > 480 ? <span className="hr"></span> : ""}
      </div>
      <div className={`status-container four ${screenWidth > 480 ? "shrink" : "shrink shrink-margin"}`}>
        <span className={`${status < 4 ? "incomplete" : ""}`}>{status > 4 ? "✓" : "4"}</span> 
        <p>Place Order</p>
      </div>
    </div>
  )

  const ctrls = (
    <div className="checkout-ctrls">
      <button 
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          setTimeout(() => setStatus(status => status - 1), 0)
        }}
      >
        Back
      </button>
      <button
        type="button"
        disabled={nextDisabled}
        onClick={(e) => {
          e.stopPropagation()
          setTimeout(() => setStatus(status => status + 1), 0)
        }}
      >
        {status === 3 ? "Confirm" : "Next"}
      </button>
    </div>
  )

  const orderCtrls = (
    <div className="order-ctrls">
      <button 
        onClick={(e) => {
          e.stopPropagation()
          setStatus(status => status -= 1)
        }}
      >
        Back
      </button>
      <button 
        className="order-btn" 
        type="submit"
        onClick={(e) => {
          e.stopPropagation()
          setStatus(status => status += 1)
          handleSubmit(e)
        }}
      >
        Place Order
      </button>
    </div>
  )

  const personalDetailsForm = (
    <div className="details-container personal">
      <label htmlFor="fname">First name:</label>
      <input 
        type="text"  
        id="fname" 
        name="fname" 
        value={personalDetails.fname} 
        placeholder="Enter your first name..."
        required
        onChange={(e)=> {
          setPersonalDetails((details) => ({...details, fname: e.target.value}))
        }}
        >
      </input>
      <label htmlFor="lname">Last name:</label>
      <input 
        type="text"  
        id="lname" 
        name="lname" 
        value={personalDetails.lname} 
        placeholder="Enter your last name..."
        required
        onChange={(e)=> {
          setPersonalDetails((details) => ({...details, lname: e.target.value}))
        }}
      >
      </input>
      <label htmlFor="email">Email:</label>
      <input 
        type="email"  
        id="email" 
        name="email" 
        value={personalDetails.email} 
        placeholder="Enter your email..."
        required
        onChange={(e)=> {
          setPersonalDetails((details) => ({...details, email: e.target.value}))
        }}
      >
      </input>
      <label htmlFor="phone">Phone Number:</label>
      <input 
        type="text"  
        id="phone" 
        name="phone" 
        value={personalDetails.phone} 
        placeholder="Enter your contact number..."
        required
        onChange={(e)=> {
          setPersonalDetails((details) => ({...details, phone: e.target.value}))
        }}
        >
        </input>
    </div>
  )

  const shippingDetailsForm = (
    <div className="details-container shipping">
      <label htmlFor="address">Address:</label>
      <input 
        type="text"  
        id="address" 
        name="address" 
        value={shippingDetails.address} 
        placeholder="Enter your address..."
        required
        onChange={(e) => {
          setShippingDetails((details) => ({...details, address: e.target.value}))
        }}
      >
      </input>
      <label htmlFor="city">City:</label>
      <input 
        type="text"  
        id="city" 
        name="city" 
        value={shippingDetails.city} 
        placeholder="Enter your city..."
        required
        onChange={(e) => {
          setShippingDetails((details) => ({...details, city: e.target.value}))
        }}
      >
      </input>
      <label htmlFor="postcode">Postcode:</label>
      <input 
        type="postcode"  
        id="postcode" 
        name="postcode" 
        value={shippingDetails.postcode} 
        placeholder="Enter your postcode..."
        required
        onChange={(e) => {
          setShippingDetails((details) => ({...details, postcode: e.target.value}))
        }}
      >
      </input>
    </div>
  )

  const confirmSection = (
    <div className="details-container confirm">
      <p>Name: {personalDetails.fname} {personalDetails.lname}</p>
      <p>Email: {personalDetails.email}</p>
      <p>Phone: {personalDetails.phone}</p>
      <p>Shipping Address: {shippingDetails.address}, {shippingDetails.city} {shippingDetails.postcode}</p>
    </div>
  )

  let total = 0
  const cartEls = cart.map((cartItem) => {
    const { imgUrl, title, price, qty } = cartItem
    const itemCost = Math.round(price * qty * 100) /100
    total += itemCost
    return (
      <div className="checkout-product-card">
        <img src={imgUrl} />
        <div className="product-text">
          <div className="product-info">
            <p className="title"><span>{title}</span> x {qty}</p>
            <h5>${price}</h5>
          </div>
          <p className="subtotal">Subtotal: ${itemCost}</p>
        </div>
      </div>
    )
  })
  total = Math.round(total * 100) / 100

  const orderSection = (
    <div className="details-container order">
      <h2>Order Summary</h2>
      {cartEls}
      <p className="total">Total: ${total}</p>
    </div>
  )

  const thanksSection = (
    <div className="details-container thanks">
      <p><span>Thanks</span> for purchasing from Crocodile! Your order has been placed! Order #{orderId} (not really, we can't accept your money just yet)</p>
      <div className="thanks-ctrls">
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  )

  const renderSection = () => {
      switch (status) {
          case 1:
              return (
                <>
                  {personalDetailsForm}
                  {ctrls}
                </>
              )
          case 2:
              return (
                <>
                  {shippingDetailsForm}
                  {ctrls}
                </>
              )
          case 3:
              return (
                <>
                  {confirmSection}
                  {ctrls}
                </>
              )
          case 4:
              return (
                <>
                  {orderSection}
                  {orderCtrls}
                </>
              )
          case 5:
              return thanksSection
          default:
              return personalDetailsForm
      }
  }

  return (
  <main className="checkout-container">
    <h1>Checkout</h1>
    {checkoutStatusBar}
    <form>
      {renderSection()}
    </form>
  </main>
)
}

export default Checkout