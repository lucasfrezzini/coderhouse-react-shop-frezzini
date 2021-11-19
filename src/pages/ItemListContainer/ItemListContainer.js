import './ItemListContainer.scss';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { FiArrowRight } from 'react-icons/fi';


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
				setLoading(false);
			})
			.catch(e => console.log(e))
	}, [])

	return (
		<section className="ItemListContainer" >
			<div className="container" >
				<SectionHeader
					title="Our most premium selection"
					icon={<FiArrowRight/>}
					type="button"
					variant=""
				/>

				{
					loading
						? <h2>Cargando...</h2>
						: <ItemList products={products} />
				}
			</div>
		</section>
	);
}

export { ItemListContainer }
