import './Category.scss'
import { Link } from 'react-router-dom'
import React from 'react'

const Category = ({name, image, slug}) => {
	return (
		<div className="Category" >
			<Link to={`/category/${slug}`} ><img src={image} alt={name}/></Link>
			<header>
				<div>
					<h3><Link to={`/category/${slug}`}>{name}</Link></h3>
				</div>
			</header>
		</div>
	)
}

export default Category
