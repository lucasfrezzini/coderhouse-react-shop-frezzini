import './Cart.scss'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import React, { useContext, useEffect } from 'react'
import { CartContext } from 'context/CartContext'
import { NavBarContext } from 'context/NavBarContext'

import CartProductList from 'components/CartProductList/CartProductList'
import CartResume from 'components/CartResume/CartResume'
import EmptyCart from 'pages/EmptyCart/EmptyCart'



const Cart = () => {
	const {
		cart,
		calculateTotalPrice,
		calculateTotalItem,
	} = useContext(CartContext)

	const {setToggleMenu} = useContext(NavBarContext)

	useEffect(() => {
		window.scrollTo(0, 0)
		setToggleMenu(false)
	}, [])

	if (!cart.length) {
		return (
			<EmptyCart />
		)
	}

	return (
		<section className="Cart">
			<div className="container">
				<SectionHeader title="My Cart" />
				<CartProductList cart={cart} />
				<CartResume
					calculateTotalPrice={calculateTotalPrice}
					calculateTotalItem={calculateTotalItem}
				/>
			</div>
		</section>
	)
}

export default Cart
