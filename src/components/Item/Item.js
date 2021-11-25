import './Item.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

const Item = ({name, category, price, main_image, id}) => {
	return (
		<div className="Item" >
			<button
				type="button"
				className="btn btn--addCart"
			>
				Add to cart <FiShoppingCart/>
			</button>
			<Link to={`/product/${id}`}><img src={main_image} alt={name} loading="lazy" /></Link>
			<header>
				<h3>$ {price}</h3>
				<div>
					<h4>{category.name}</h4>
					<h3><Link to={`/product/${id}`}>{name}</Link></h3>
				</div>
			</header>
		</div>
	)
}

export default Item
