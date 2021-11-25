import './CartQuantity.scss';
import React, { useState } from 'react'

import { FiArrowRight } from "react-icons/fi";


const CartQuantity = ({stock, initial, onAdd}) => {
	const initialquantity = initial || 1;
	const [quantity, setQuantity] = useState(initialquantity);

	const handleQuantityDown = () => {
		if (quantity > 1 ) { setQuantity(quantity - 1) }
	}

	const handleQuantityUp = () => {
		if (quantity < stock) { setQuantity(quantity + 1) }
	}

	return (
		<div className="CartQuantity">
			<div className="CartQuantity__buttons">
				<button
					type="button"
					disabled={quantity === 1}
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
		</div>
	)
}

export default CartQuantity
