import React from 'react'
import { Link } from 'react-router-dom'
import { FiSend } from 'react-icons/fi'

const CartResume = ({calculateTotalPrice, calculateTotalItem}) => {
	return (
		<section className="Cart__resume">
			<h3>Resume Cart Information</h3>
			<h4>Order total: <span>$ {calculateTotalPrice().toFixed(2)}</span></h4>
			<h4>Total Products: <span>{calculateTotalItem()}</span></h4>
			<Link to="/checkout">
				<button
					type="button"
					className="btn"
				>
					CheckOut <FiSend/>
				</button>
			</Link>
		</section>
	)
}

export default CartResume
