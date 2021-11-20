import './Item.scss'
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import Button from '../Button/Button';

const Item = ({name, category, price, main_image}) => {
	return (
		<div className="Item" >
			<Button
				text="Add to cart"
				icon={<FiShoppingCart/>}
				type="button"
				variant="Button__addCart"
			/>
			<a href="item.html" ><img src={main_image} alt={name}/></a>
			<header>
				<h3>$ {price}</h3>
				<div>
					<h4>{category.name}</h4>
					<h3><a href="item.html">{name}</a></h3>
				</div>
			</header>
		</div>
	)
}

export default Item
