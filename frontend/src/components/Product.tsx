import { useState, useEffect } from 'react'
import { ImEnlarge2 } from "react-icons/im"

type ProductType = {
	title: string
	price: number
	description: string
	displayImage: string
	extraImages?: string[]
	colors?: {
		[color: string]: {
			images: string[]
		}
  }
}

type Props = {
  product: ProductType
}

type CartItem = {
  title: string
  qty: number,
  price: number,
  imgUrl: string,
  selectedColor?: string,
  description: string
}

const Product = ({ product }: Props) => {

  const { title, price, description, displayImage, extraImages, colors } = product

  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string>(displayImage)

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(e)
    // retrieve cart from local storage
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") ?? "[]")
    console.log(cart)
    // Check if the item already exists in the user's cart 
    const existingItem = cart.find(item => 
      item.title === title && (selectedColor ? item.selectedColor === selectedColor : !item.selectedColor)
    )

    let updatedCart: CartItem[];
    // If item exists increment the quantity
    if (existingItem) {
      updatedCart = cart.map(item =>
        item.title === title &&
        (selectedColor ? item.selectedColor === selectedColor : !item.selectedColor)
        ? { ...item, qty: item.qty + 1 }
        : item
      )
    } else {
      // Add a new item
      const newItem: CartItem = {
        title,
        qty: 1,
        price,
        imgUrl: selectedImage,
        description,
        ...(selectedColor && { selectedColor })
      }
      
      updatedCart = [...cart, newItem]
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart))
    console.log("Updated cart: ", updatedCart)
  }

  useEffect(() => {
    if (colors) {
      setSelectedColor(Object.keys(colors)[0])
    }
  }, [])

  useEffect(() => {
    if (selectedColor && colors?.[selectedColor]) {
      setSelectedImage(colors[selectedColor].images[0])
    } else {
      setSelectedImage(displayImage)
    }
  }, [selectedColor])

  const thumbnails = selectedColor && colors?.[selectedColor]
  ? colors[selectedColor].images 
  : extraImages ?? []

  return (
    <div className="product__card">
      <div className="image-section">
        {thumbnails.length > 0 && (
          <div className="thumbnails">
            {thumbnails.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`${title} thumbnail ${idx}`}
                className={url === selectedImage ? "selected" : ""}
                onClick={() => setSelectedImage(url)}
              />
            ))}
          </div>
        )}
        <img src={selectedImage} alt={title} className="main-image" />
        <div className='full-screen-btn'>
          <a target='_blank' href={selectedImage}><ImEnlarge2 /></a>
        </div>
      </div>
      {colors && (
        <div className="color-selector">
          {Object.keys(colors).map((color) => (
            <button
              key={color}
              className={`color-btn ${selectedColor === color ? "active" : ""}`}
              onClick={() => setSelectedColor(color)}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
      <div className="product__info">
        <p className='title'>{title}</p>
        <p className='price'>${price}</p>
        <p className='description'>{description}</p>
      </div>
      <button 
        className='add-to-cart-btn'
        onClick={handleAddToCart}
      >
          Add to cart
        </button>
    </div>
  )
}

export default Product