import './ItemDetailContainer.scss';

import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router';
import { NavBarContext } from 'context/NavBarContext';
import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from 'firebase/config';

import ItemDetail from 'components/ItemDetail/ItemDetail'
import SkeletonItem from 'components/SkeletonItem/SkeletonItem';

const ItemDetailContainer = () => {
	const {idProduct} = useParams();
	const [item, setItem] = useState([]);
	const [loading, setLoading] = useState(false);
	const {setToggleMenu} = useContext(NavBarContext);

	useEffect(() => {
		window.scrollTo(0, 0);
		setToggleMenu(false);
	}, [])

	useEffect(() => {
		setLoading(true);

		// 1 - Make the reference
		const itemReference = doc(db, 'products', idProduct)
		// 2 - GET on the reference
		getDoc(itemReference)
			.then(doc => {
				const getItemFromFirestore = doc.data();
				setItem(getItemFromFirestore);
				setTimeout(() => setLoading(false), 500);
			})
			.catch(e => console.log('error Firebase item', e))
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
