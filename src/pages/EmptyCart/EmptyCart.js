import React from 'react'

import SectionHeader from 'components/SectionHeader/SectionHeader'
import CategoryListContainer from 'pages/CategoryListContainer/CategoryListContainer'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const EmptyCart = () => {
	return (
		<section className="Cart">
			<div className="container Cart__empty">
				<SectionHeader title="Nothing in your shopping bag yet..." />
				<Link to="/category">
					<button
						type="button"
						className="btn btn--large"
					>
						Go to premium items <FiArrowRight/>
					</button>
				</Link>
			</div>
			<CategoryListContainer />
		</section>
	)
}

export default EmptyCart
