import './ItemCount.scss';
import React, { useState } from 'react'

import Button from 'components/Button/Button';
import { FiArrowRight, FiShoppingCart } from "react-icons/fi";


const ItemCount = ({stock, initial, onAdd}) => {
	console.log(onAdd);
	const initialquantity = initial;
	const [quantity, setQuantity] = useState(initialquantity);

	const handleQuantityDown = () => {
		if (quantity > 0 ) { setQuantity(quantity - 1) }
	}

	const handleQuantityUp = () => {
		if (quantity < stock) { setQuantity(quantity + 1) }
	}

	return (
		<div className="ItemCount">
			<h3>Quantity</h3>
			<div className="ItemCount__buttons">
				<button
					type="button"
					disabled={quantity === 0}
					onClick={handleQuantityDown}
					className="btn_quantity btn_quantity--quit"
				>
					<FiArrowRight />
				</button>
				<span>{quantity}</span>
				<button
					type="button"
					onClick={handleQuantityUp}
					className="btn_quantity btn_quantity--add"
					disabled={quantity === stock}
				>
					<FiArrowRight />
				</button>
			</div>
			<button
				onClick={() => onAdd()}
				type="button"
				className="Button"
			>
					Add to cart <FiShoppingCart/>
			</button>
		</div>
	)
}

export default ItemCount
