import './ItemDetailContainer.scss';

import React, { useState, useEffect } from 'react'
import ItemDetail from '../../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
	const API_URL = 'https://619451004acf9c64d5cf9356.mockapi.com/item';
	const [item, setItem] = useState(false);
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true);
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				setItem(data)
				setLoading(false)
				console.log(item);
			})
	}, [])

	return (
		<div>
			{
				loading
					? <h2>Cargando...</h2>
					: <ItemDetail item={item} />
			}
		</div>
	)
}

export default ItemDetailContainer;
