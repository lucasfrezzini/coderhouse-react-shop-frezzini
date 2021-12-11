import './CartProductList.scss'

import React from 'react'
import { useContext } from 'react'
import { CartContext } from 'context/CartContext'

import { FiTrash2 } from 'react-icons/fi'
import CartQuantity from 'components/CartQuantity/CartQuantity'

const CartProductList = () => {
	const {
		cart,
		removeFromCart,
		calculateSubTotalPrice,
		emptyCart
	} = useContext(CartContext)

	return (
		<section>
			<table className="Cart__products-list">
				<tr>
					<th></th>
					<th>Unit price</th>
					<th>Product information</th>
					<th>Quantity</th>
					<th>SubTotal</th>
				</tr>
				{
					cart.map( (item, idx) => (
					<tr className="Cart__product" key={idx}>
						<td className="trash" onClick={() => removeFromCart(item.id)}><FiTrash2/></td>
						<td className="price">$ {item.price}</td>
						<td className="info">
							<div className="info__grid">
							<img src={item.main_image} alt="" />
							<div>
								<h3>{item.name}</h3>
								<h4>Product code: {item.id}</h4>
							</div>
							</div>
						</td>
						<td className="quantity">
							<CartQuantity
								id={item.id}
								stock={item.stock}
								initial={item.quantity}
							/>
						</td>
						<td className="subtotal">$ {calculateSubTotalPrice(item.price, item.quantity)}</td>
					</tr>
					))
				}
			</table>
			<button
				onClick={() => emptyCart()}
				type="button"
				className="btn btn--outline btn--danger"
			>
				Empty Cart <FiTrash2/>
			</button>
		</section>
	)
}

export default CartProductList
