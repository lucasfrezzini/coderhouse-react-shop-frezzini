import './CartQuantity.scss';
import React, { useContext, useState } from 'react'

import { FiArrowRight } from "react-icons/fi";
import { CartContext } from 'context/CartContext';


const CartQuantity = ({stock, initial, id}) => {
	const {
		incrementQuantity,
		decrementQuantity
	} = useContext(CartContext);

	const initialquantity = initial || 1;
	const [quantity, setQuantity] = useState(initialquantity);

	const handleQuantityDown = () => {
		if (quantity > 1 ) {
			setQuantity(quantity - 1);
			decrementQuantity(id)
		}
	}

	const handleQuantityUp = () => {
		if (quantity < stock) {
			setQuantity(quantity + 1);
			incrementQuantity(id);
		}
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
