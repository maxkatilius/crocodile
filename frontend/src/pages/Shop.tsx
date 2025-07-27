import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import ShopProduct from "../components/ShopProduct"
import { fetchProducts } from "../utils"

type ProductType = {
	id: number
	title: string
	price: number
	description: string
	displayImage: string
}

const Shop = () => {

	const [products, setProducts] = useState<ProductType[] | null>(null)

	useEffect(() => {
		fetchProducts()
			.then(res => setProducts(res.data))
			.catch(err => console.error(err))
	}, [])

	const productEls = products
		?.sort((a, b) => a.id - b.id)
		.map((product, idx) => {
			return (
				<ShopProduct 
					key={idx} 
					product={product}
				/>
			)
	})

	return (
		<main className="shop-container">
			<h2>The Croc Shop</h2>
			<div className="products-container">
				{productEls}
			</div>
			<Link to="/cart" className="go-to-cart-btn">
				<span className="button-text">Your Shopping Cart</span>
				<span className="arrow right" />
			</Link>
		</main>
	)
}

export default Shop;
