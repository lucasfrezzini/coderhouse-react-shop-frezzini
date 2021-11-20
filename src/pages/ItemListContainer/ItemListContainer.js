import './ItemListContainer.scss';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { FiArrowRight } from 'react-icons/fi';
import SkeletonList from '../../components/SkeletonList/SkeletonList';


const ItemListContainer = () => {
	const API_URL = "https://619451004acf9c64d5cf9356.mockapi.com/items";
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setTimeout(() => setLoading(false), 1000)
			})
			.catch(e => console.log(e))
	}, [])

	return (
		<section className="ItemListContainer" >
			<div className="container" >
				<SectionHeader
					title="Our most premium selection"
					button
					icon={<FiArrowRight/>}
					type="button"
					variant=""
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

export { ItemListContainer }
