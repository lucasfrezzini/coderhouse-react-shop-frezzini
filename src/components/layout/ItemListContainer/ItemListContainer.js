import './ItemListContainer.scss';
import { useEffect, useState } from 'react';
import ItemList from '../../ItemList/ItemList';
import { FiArrowRight } from 'react-icons/fi';
import getData from '../../../helpers/getDataApi';
import SectionHeader from '../../SectionHeader/SectionHeader';


const ItemListContainer = () => {
	const API_URL = "http://sociedaditaliana.org/api-vikings/apiVikings.json";
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getData(API_URL)
			.then(
				(response) => {
					setProducts(response);
					console.log(products)
				}
			)
			.catch(
				(error) => {
					console.log(error);
				}
			)
			.finally(
				() =>{
					setLoading(false);
				}
			)
	}, [products])

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
