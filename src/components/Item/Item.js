import './Item.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import Button from 'components/Button/Button';

const Item = ({name, category, price, main_image, id}) => {
	return (
		<div className="Item" >
			<Button
				text="Add to cart"
				icon={<FiShoppingCart/>}
				type="button"
				variant="Button__addCart"
			/>
			<Link to={`/product/${id}`}><img src={main_image} alt={name}/></Link>
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
