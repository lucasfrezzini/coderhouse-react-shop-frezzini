import './ItemListContainer.scss'
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import { NavBarContext } from 'context/NavBarContext'
import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from 'firebase/config'

import { handleProductsHome } from 'helpers/handleProductsHome'
import { handleProductsCategory } from 'helpers/handleProductsCategory'
import { handleProductsTitle } from 'helpers/handleProductsTitle'

import ItemList from 'components/ItemList/ItemList'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import SkeletonList from 'components/SkeletonList/SkeletonList'
import { FiArrowRight } from 'react-icons/fi'

const ItemListContainer = ({isHome}) => {
	const {slugCategory} = useParams()
	const [products, setProducts] = useState([])
	const [title, setTitle] = useState('')
	const [loading, setLoading] = useState(false)
	const {setToggleMenu} = useContext(NavBarContext)

	useEffect(() => {
		window.scrollTo(0, 0)
		setToggleMenu(false)
	}, [slugCategory])

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
							setProducts(handleProductsCategory(getProductsFromFirestore, slugCategory))
						} else {
							setProducts(getProductsFromFirestore)
						}
					}
					handleProductsTitle(isHome, slugCategory, setTitle)
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
