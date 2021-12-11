import "./Checkout.scss"
import React, { useContext, useEffect } from "react"

import { CartContext } from 'context/CartContext'
import { NavBarContext } from 'context/NavBarContext'

import SectionHeader from "components/SectionHeader/SectionHeader"
import CheckoutForm from "components/CheckoutForm/CheckoutForm"
import CheckoutResume from "components/CheckoutResume/CheckoutResume"
import EmptyCart from "pages/EmptyCart/EmptyCart"



const Checkout = () => {
	const {
		cart
	} = useContext(CartContext);

	const {setToggleMenu} = useContext(NavBarContext)

	useEffect(() => {
		window.scrollTo(0, 0);
		setToggleMenu(false);
	}, [])

	if (!cart.length) {
		return (
			<EmptyCart />
		)
	}

	return (
		<section className="Checkout">
			<div className="container">
				<SectionHeader title="Checkout" />
			</div>
			<div className="container grid">
				<CheckoutForm />
				<CheckoutResume />
			</div>
		</section>
	)
}

export default Checkout
