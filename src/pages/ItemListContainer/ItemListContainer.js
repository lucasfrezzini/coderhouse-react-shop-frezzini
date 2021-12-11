import './ItemListContainer.scss'
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import { NavBarContext } from 'context/NavBarContext'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from 'firebase/config'

import ItemList from 'components/ItemList/ItemList'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import SkeletonList from 'components/SkeletonList/SkeletonList'
import { FiArrowRight } from 'react-icons/fi'


const ItemListContainer = ({isHome}) => {
	const {slugCategory, setSlugCategory} = useParams()
	const [products, setProducts] = useState([])
	const [title, setTitle] = useState('')
	const [loading, setLoading] = useState(false)
	const {toggleMenu, setToggleMenu} = useContext(NavBarContext)

	useEffect(() => {
		window.scrollTo(0, 0)
		setToggleMenu(!toggleMenu)
	}, [slugCategory])

	const handleTitle = () => {
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
					setTitle(`Category: All items`)
				}
			}
		}
	}

	const handleProductsHome = products => {
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

	const handleProductsCategory = products => {
		// we need filter by actual category or show all
		let newProducts = []
		products.map( item => {
			if ( item.category.slug === slugCategory) {
				newProducts.push(item)
			}
		})
		return newProducts
	}

	useEffect(() => {
		const catSlugs = ['rings', 'necklaces', 'earrings', 'drinking-horns']
		setLoading(true)

		// 1 - Make the reference
		const productsReference = collection(db, 'products')
		// 2 - GET on the reference
		getDocs(productsReference)
			.then( collection => {
				const getProductsFromFirestore = collection.docs.map(doc => doc.data())
				if (getProductsFromFirestore.length) {
					if (isHome) {
						setProducts(handleProductsHome(getProductsFromFirestore))
					} else {
						if (catSlugs.find( cat => cat === slugCategory)) {
							setProducts(handleProductsCategory(getProductsFromFirestore))
						} else {
							setProducts(getProductsFromFirestore)
						}
					}
					handleTitle()
				}
				setTimeout(() => setLoading(false), 500)
			})
			.catch(e => console.log(e))

	}, [slugCategory])



	return (
		<section className="ItemListContainer" >
			<div className="container" >
				<SectionHeader
					isHome={isHome}
					title={title}
					button
					icon={<FiArrowRight/>}
					type="button"
				/>

				{
					loading
						? <SkeletonList />
						: <ItemList products={products} />
				}
			</div>
		</section>
	);
}

export default ItemListContainer
