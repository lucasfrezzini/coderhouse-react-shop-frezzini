import './Item.scss'
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import Button from '../Button/Button';

const Item = ({name, category, price, images}) => {
	return (
		<div
			className="Item"
			key={`item-${name}`}
		>
			<Button
				text="Add to cart"
				icon={<FiShoppingCart/>}
				type="button"
				variant="Button__addCart"
			/>
			<img src={images[0]} alt={name}/>
			<header>
				<div>
					<h4>{category.name}</h4>
					<h3>{name}</h3>
				</div>
				<h3>$ {price}</h3>
			</header>
		</div>
	)
}

export default Item
