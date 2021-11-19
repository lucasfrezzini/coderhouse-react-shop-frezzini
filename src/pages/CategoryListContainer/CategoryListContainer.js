import './CategoryListContainer.scss';

import React, { useState, useEffect } from 'react'
import CategoryList from '../../components/CategoryList/CategoryList'

const CategoryListContainer = () => {
	const API_URL = 'https://619451004acf9c64d5cf9356.mockapi.com/category';
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true);
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				setCategories(data)
				setLoading(false)
			})
			.catch(e => console.log(e))
	}, [])

	return (
		<>
			{
				loading
					? <h2>Cargando...</h2>
					: <CategoryList categories={categories} />
			}
		</>
	)
}

export default CategoryListContainer;
