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
			.then(res => {
				if (res) {
					setProducts(res.data)
				}
			})
			.catch(err => console.log(err))
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
			<h1>The Croc Shop</h1>
			{products ? (
				<>
					<div className="products-container">
						{productEls}
					</div>
					<Link to="/cart" className="go-to-cart-btn">
						<span className="button-text">Your Shopping Cart</span>
						<span className="arrow right" />
					</Link>
				</>
			) :(
				<div className="loading"></div>
			)}
		</main>
	)
}

export default Shop;
