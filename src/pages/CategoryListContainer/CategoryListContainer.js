import './CategoryListContainer.scss'

import React, { useState, useEffect, useContext } from 'react'
import { CategoriesContext } from 'context/CategoriesContext'

import CategoryList from 'components/CategoryList/CategoryList'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import SkeletonList from 'components/SkeletonList/SkeletonList'


const CategoryListContainer = (isHome) => {
	const { categories } = useContext(CategoriesContext)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => setLoading(false), 500)
	}, [])

	return (
		<section className="CategoryListContainer" >
			<div className="container" >
				<SectionHeader
					isHome={isHome}
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

export default CategoryListContainer
