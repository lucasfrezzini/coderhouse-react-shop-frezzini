import './ItemDetailContainer.scss';

import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

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
			})
	}, [])

	return (
		<>
			{
				loading
					? <h2>Cargando...</h2>
					: <ItemDetail item={item} />
			}
		</>
	)
}

export default ItemDetailContainer;
