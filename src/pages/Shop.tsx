import productsData from "../data/products.json";
import Product from "../components/Product"

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

const products = productsData as ProductType[];

const Shop = () => {

	const productEls = products.map((product, idx) => {
		return (
			<Product 
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
		</main>
	)
}

export default Shop;
