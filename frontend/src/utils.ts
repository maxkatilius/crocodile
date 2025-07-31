export const fetchProducts = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products`)
        const data = await response.json()
        return data

    } catch (error) {
        console.error('Fetch products error:', error)
    }
}

export const fetchProductData = async (id: string) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`)
        const data = await response.json()
        return data

    } catch (error) {
        console.error('Fetch product details error', error)
    }
}