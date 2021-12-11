import React, { useContext } from "react"

import { CartContext } from 'context/CartContext'
import { FiCreditCard, FiTruck } from "react-icons/fi"

const CheckoutResume = () => {
	const {
		calculateTotalPrice,
		calculateFinalPrice,
		shipping,
		giftcards
	} = useContext(CartContext)

	return (
		<section className="Checkout__resume">
			<section className="resume__summary">
				<article>
					<header>
						<h3>Summary</h3>
						<h4>The total cost consist of the total order charge, the shipping charge and teacher & tutor giftcard</h4>
					</header>
					<ul>
						<li><span>Order cost:</span><span>{`$${calculateTotalPrice().toFixed(2)}`}</span></li>
						<li><span>Shipping cost: </span><span>{`$${shipping}`}</span></li>
						<li><span>Giftcards: </span><span>{`$${giftcards}`}</span></li>
					</ul>
					<hr></hr>
					<footer>
						<ul>
							<li><span>Total: </span><span>{`$${calculateFinalPrice()}`}</span></li>
						</ul>
					</footer>
				</article>
			</section>
			<section className="resume__feature">
				<FiTruck/>
				<article>
					<header>Safe Shipping</header>
					<footer>Shipment is guaranteed safely and at lightning speed</footer>
				</article>
			</section>
			<section className="resume__feature">
				<FiCreditCard/>
				<article>
					<header>Secure Payment</header>
					<footer>Secure payment against threats. End-to-end encryption</footer>
				</article>
			</section>
		</section>
	)
}

export default CheckoutResume
