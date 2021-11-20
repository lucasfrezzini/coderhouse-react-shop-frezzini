import './Category.scss'
import { Link } from 'react-router-dom';
import React from 'react';

const Category = ({name, image, id}) => {
	return (
		<div className="Category" >
			<Link to={`/category/${id}`} ><img src={image} alt={name}/></Link>
			<header>
				<div>
					<h3><Link to={`/category/${id}`}>{name}</Link></h3>
				</div>
			</header>
		</div>
	)
}

export default Category
