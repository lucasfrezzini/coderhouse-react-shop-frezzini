import './ItemCount.scss';
import React, { useState } from 'react'

import { FiArrowRight } from "react-icons/fi";


const ItemCount = ({stock, initial}) => {
	const initialCant = initial || 1;
	const [cant, setCant] = useState(initialCant);

	const handleCantDown = () => {
		if (cant > 0 ) { setCant(cant - 1) }
	}

	const handleCantUp = () => {
		if (cant < stock) { setCant(cant + 1) }
	}

	return (
		<div className="ItemCount">
			<button
				type="button"
				disabled={cant === 0}
				onClick={handleCantDown}
				className="btn_quantity btn_quantity--quit"
			>
				<FiArrowRight />
			</button>
			<span>{cant}</span>
			<button
				type="button"
				onClick={handleCantUp}
				className="btn_quantity btn_quantity--add"
				disabled={cant === stock}
			>
				<FiArrowRight />
			</button>

		</div>
	)
}

export { ItemCount }
