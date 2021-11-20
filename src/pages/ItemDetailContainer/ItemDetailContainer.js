import './ItemDetailContainer.scss';

import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import SkeletonItem from '../../components/SkeletonItem/SkeletonItem';

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
				setTimeout(() => setLoading(false), 1000)
			})
			.catch(e => console.log(e))
	}, [])

	return (
		<>
			{
				loading
					? <SkeletonItem />
					: <ItemDetail item={item} />
			}
		</>
	)
}

export default ItemDetailContainer;
