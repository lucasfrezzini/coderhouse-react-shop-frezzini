export const handleProductsTitle = (isHome, slugCategory, setTitle) => {
	// 4 catedories -> 4 ids (1,2,3,4)
	// 1: Rings | 2: Necklaces | 3: Earrings | 4: Drinking Horn
	const catNames = ['Rings', 'Necklaces', 'Earrings', 'Drinking Horns']
	const catSlugs = ['rings', 'necklaces', 'earrings', 'drinking-horns']

	if (isHome) {
		setTitle('Our most premium selection')
	} else {
		if (catSlugs.find( str => str === slugCategory)) {
			setTitle(`Category: ${catNames[catSlugs.findIndex(cat => cat === slugCategory)]}`)
		} else {
			if (slugCategory) {
				setTitle(`This category does not exist, but we show you all items...`)
			} else {
				setTitle(`All items`)
			}
		}
	}
}
