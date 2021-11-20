import './ItemDetailContainer.scss';

import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import SkeletonItem from '../../components/SkeletonItem/SkeletonItem';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {
	const API_URL = "https://619451004acf9c64d5cf9356.mockapi.com/items";
	const {idProduct} = useParams();
	console.log(idProduct);
	const [item, setItem] = useState([]);
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true);
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				console.log('find', data.find(item => item.id === idProduct))
				setItem(data.find(item => item.id === idProduct));
				console.log('post find item', item)
				setTimeout(() => setLoading(false), 1000)
			})
			.catch(e => console.log('error fetch', e))
	}, [idProduct])

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
