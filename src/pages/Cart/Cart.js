import './Cart.scss';
import SectionHeader from 'components/SectionHeader/SectionHeader'
import React, { useContext, useEffect } from 'react'
import { CartContext } from 'context/CartContext';
import { NavBarContext } from 'context/NavBarContext';
import { Link } from 'react-router-dom';

import { FiSend, FiArrowRight } from 'react-icons/fi'

import CategoryListContainer from 'pages/CategoryListContainer/CategoryListContainer';
import CartProductList from 'components/CartProductList/CartProductList';



const Cart = () => {
	const {
		cart,
		calculateTotalPrice,
		calculateTotalItem,
	} = useContext(CartContext);

	const {setToggleMenu} = useContext(NavBarContext)

	useEffect(() => {
		window.scrollTo(0, 0);
		setToggleMenu(false);
	}, [])

	if (!cart.length) {
		return (
			<section className="Cart">
				<div className="container Cart__empty">
					<SectionHeader title="Nothing in your shopping bag yet..." />
					<Link to="/category">
						<button
							type="button"
							className="btn btn--large"
						>
							Go to premium items <FiArrowRight/>
						</button>
					</Link>
				</div>
				<CategoryListContainer />
			</section>
		)
	}

	return (
		<section className="Cart">
			<div className="container">
				<SectionHeader title="My Cart" />

				<CartProductList cart={cart} />

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

			</div>
		</section>
	)
}

export default Cart
