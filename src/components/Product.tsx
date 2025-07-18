import React from 'react'

// options ? colors, add to cart, reviews/ratings,
// deck of cards
// croc dealer chip
// merch - hoodie, shirt, beanie, hat

type Props = {
    title: string
    price: number
    description: string
}

const Product = ( { title, price, description, imgUrl }: Props ) => {
  return (
    <div>Product</div>
  )
}

export default Product