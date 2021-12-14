export const handleProductsHome = products => {
	// we need 2 items for any category the Home layout
	// 4 catedories -> 4 ids (1,2,3,4)
	let newProducts = []
	for (let idCategory = 1; idCategory < 5; idCategory++) {
		let idxData = products.findIndex(item => item.category.id === idCategory)
		newProducts.push(products[idxData])
		if (products[idxData+1].category.id === idCategory) { newProducts.push(products[idxData+1]) }
	}
	return newProducts
}
