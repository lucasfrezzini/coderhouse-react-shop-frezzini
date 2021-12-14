export const handleProductsCategory = (products, slugCategory) => {
	// we need filter by actual category or show all
	let newProducts = []
	products.map( item => {
		if ( item.category.slug === slugCategory) {
			newProducts.push(item)
		}
	})
	return newProducts
}
