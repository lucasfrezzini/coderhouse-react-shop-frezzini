import './Category.scss'
import React from 'react';

const Category = ({name, image}) => {
	return (
		<div className="Category" >
			<a href="item.html" ><img src={image} alt={name}/></a>
			<header>
				<div>
					<h3><a href="item.html">{name}</a></h3>
				</div>
			</header>
		</div>
	)
}

export default Category
