import { useState, useEffect, useContext } from "react"
import { fetchProductData } from "../utils"
import CartContext, { CartItem } from "../context/CartContext"
import { ImEnlarge2 } from "react-icons/im"

type ProductType = {
	id: number
	title: string
	price: number
	description: string
	displayImage: string
}

type Props = {
  product: ProductType
}

type ProductDetailsType = {
	id: number
	title: string
	price: number
	description: string
	displayImage: string
	images: {
		[color: string]: string[]
	}
	colors?: string[]
	sizes?: string[]
}

const ShopProduct = ({ product }: Props) => {

  const { id, title, price, description, displayImage } = product

  const [colors, setColors] = useState<string[]>([]) 
  const [sizes, setSizes] = useState<string[]>([]) 
  const [images, setImages] = useState<{[color: string]: string[]}>({})

  const [selectedColor, setSelectedColor] = useState<string>('default')
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string>(displayImage) 

  
  const context = useContext(CartContext)
  if (!context) throw new Error("CartContext must be used within a CartProvider")
  const { cart, setCart } = context

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // Check if the item already exists in the user's cart 
    const existingItem = cart.find(item => 
      item.title === title && 
      (item.color === selectedColor || !item.color) && 
      (item.size === selectedSize || !item.size)
    )

    let updatedCart: CartItem[];
    // If item exists increment the quantity
    if (existingItem) {
      updatedCart = cart.map(item =>
        item.title === title &&
        (item.color === selectedColor || !item.color) && 
        (item.size === selectedSize || !item.size)
        ? { ...item, qty: item.qty + 1 }
        : item
      )
    } else {
      // Add a new item
      const newItem: CartItem = {
        id,
        title,
        qty: 1,
        price,
        imgUrl: selectedImage,
        description,
        ...(selectedColor !== "default" ? { color: selectedColor } : {}),
        ...(selectedSize ? { size: selectedSize }: {})
      }
      
      updatedCart = [...cart, newItem]
    }
    
    setCart(updatedCart)
  }

  useEffect(() => {
    fetchProductData(id.toString())
    .then(res => {
      const product = res.data as ProductDetailsType
      setColors(product.colors ?? [])
      setSizes(product.sizes ?? [])
      setImages(product.images ?? [])
    })
  }, [])

  useEffect(() => {
    if (colors.length > 0) {
      setSelectedColor(colors[0])
    } else {
      setSelectedColor('default')
    }

    if (sizes.length > 0) {
      setSelectedSize(sizes[0])
    }
  }, [colors, sizes])

  useEffect(() => {
    if (selectedColor && images[selectedColor]?.length > 0) {
      setSelectedImage(images[selectedColor][0])
    } else {
      setSelectedImage(displayImage)
    }
  }, [selectedColor, images])


  const thumbnails = images[selectedColor] ?? []

  return (
    <div className="shop-product-card">
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
      <div className="product-info">
        <div className="product-header">
          <p className='title'>{title}</p>
          <div className="product-selectors">
            {colors.length > 0 && (
              <div className="color-selector">
                {colors.map((color) => {
                  return (
                    <button
                    key={color}
                    className={`color-btn ${selectedColor === color ? "active" : ""}`}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color === 'Green' ? "#07543A" : color }}
                    />
                  )
                })}
              </div>
            )}
            {sizes.length > 0 && (
              <div className="size-selector-wrapper">
                <select
                  className="size-selector"
                  value={selectedSize ?? ""}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  >
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
        <p className='price'>${price}</p>
        <p className='description'>{description}</p>
      </div>
      <button 
        className='add-to-cart-btn'
        onClick={handleAddToCart}
      >
          Add to Cart
        </button>
    </div>
  )
}

export default ShopProduct