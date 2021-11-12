import './ItemListContainer.scss';
import { useEffect, useState } from 'react';
import Button from '../../Button/Button';
import ItemList from '../../ItemList/ItemList';
import { FiArrowRight } from 'react-icons/fi';
import getData from '../../../helpers/getDataApi';


const ItemListContainer = () => {
	const API_URL = "";
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
				<header className="ItemListContainer__header">
					<h3>Our most premium selection</h3>
					<Button
						text="See all items"
						icon={<FiArrowRight/>}
						type="button"
						variant=""
					/>
				</header>
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
