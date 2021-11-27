import './CategoryListContainer.scss';

import React, { useState, useEffect } from 'react'

import CategoryList from 'components/CategoryList/CategoryList'
import SectionHeader from 'components/SectionHeader/SectionHeader';
import SkeletonList from 'components/SkeletonList/SkeletonList';

const CategoryListContainer = (isHome) => {

	const API_URL = 'https://619451004acf9c64d5cf9356.mockapi.com/category';
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				setCategories(data)
				setTimeout(() => setLoading(false), 1000)
			})
			.catch(e => console.log(e))
	}, [])

	return (
		<section className="CategoryListContainer" >
			<div className="container" >
				<SectionHeader
					isHome
					title="Our Categories"
				/>

				{
					loading
						? <SkeletonList />
						: <CategoryList categories={categories} />
				}
			</div>
		</section>
	)
}

export default CategoryListContainer;
