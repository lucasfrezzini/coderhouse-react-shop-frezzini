import { React, useState } from 'react'
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
	const initialCant = initial || 1;
	const [cant, setCant] = useState(initialCant);

	const handleCantDown = () => {
		if (cant > 0 ) { setCant(cant - 1) }
	}

	const handleCantUp = () => {
		if (cant < stock) { setCant(cant + 1) }
	}

	return (
		<div>
			<button
				type="button"
				disabled={cant === 0}
				onClick={handleCantDown}
				className="btn_cart"
			>
				-
			</button>
			<span>{cant}</span>
			<button
				type="button"
				onClick={handleCantUp}
				className="btn_cart"
				disabled={cant === stock}
			>
				+
			</button>
			<br/>
			<button
				type="button"
				className="btn_addCart"
				onClick={() => onAdd(cant)}
			>
				Agregar al carrito
			</button>
		</div>
	)
}

export { ItemCount }
