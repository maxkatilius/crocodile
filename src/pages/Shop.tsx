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

	return <main className="shop-container">{productEls}</main>;
};

export default Shop;
