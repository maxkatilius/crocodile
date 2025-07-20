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

const Product = ({ product }: Props) => {

  const { title, price, description, displayImage, extraImages, colors } = product;

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>(displayImage);

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
      <button className='add-to-cart-btn'>Add to cart</button>
    </div>
  )
}

export default Product