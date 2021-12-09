import './Cart.scss';
import SectionHeader from 'components/SectionHeader/SectionHeader'
import React, { useContext, useEffect } from 'react'
import { CartContext } from 'context/CartContext';
import { NavBarContext } from 'context/NavBarContext';
import { Link } from 'react-router-dom';

import { FiTrash2, FiSend, FiArrowRight } from 'react-icons/fi'

import CartQuantity from 'components/CartQuantity/CartQuantity';
import CategoryListContainer from 'pages/CategoryListContainer/CategoryListContainer';



const Cart = () => {
	const {
		cart,
		removeFromCart,
		calculateTotalPrice,
		calculateSubTotalPrice,
		emptyCart,
		calculateTotalItem,
	} = useContext(CartContext);

	const {toggleMenu, setToggleMenu} = useContext(NavBarContext)

	useEffect(() => {
		window.scrollTo(0, 0);
		setToggleMenu(false);
	}, [])


	return (
		<section className="Cart">
			{
			cart.length
				?	<div className="container">
						<SectionHeader title="My Cart" />

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

						<section className="Cart__resume">
							<h3>Resume Cart Information</h3>
							<h4>Order total: <span>$ {calculateTotalPrice().toFixed(2)}</span></h4>
							<h4>Total Products: <span>{calculateTotalItem()}</span></h4>
							<button
								type="button"
								className="btn"
							>
								CheckOut <FiSend/>
							</button>
						</section>

					</div>
				: <>
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
					</>
			}
		</section>
	)
}

export default Cart
