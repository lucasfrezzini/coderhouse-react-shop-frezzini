import './Cart.scss';
import SectionHeader from 'components/SectionHeader/SectionHeader'
import React from 'react'
import { FiTrash2, FiSend } from 'react-icons/fi'

import img from 'assets/images/probando/1.png'
import img2 from 'assets/images/probando/2.png'
import CartQuantity from 'components/CartQuantity/CartQuantity';

const Cart = () => {
	return (
		<section className="Cart">
			<div className="container">
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
						<tr class="Cart__product">
							<td className="trash"><FiTrash2/></td>
							<td className="price">$29.99</td>
							<td className="info">
								<img src={img} alt="" />
								<div>
									<h3>Lingsberg Dragon Drinking Horn</h3>
									<h4>Product code: 333</h4>
								</div>
							</td>
							<td className="quantity">
								<CartQuantity
									stock={10}
									onAdd={''}
								/>
							</td>
							<td className="subtotal">$222.00</td>
						</tr>
						<tr class="Cart__product">
							<td className="trash"><FiTrash2/></td>
							<td className="price">$29.99</td>
							<td className="info">
								<img src={img2} alt="" />
								<div>
									<h3>Lingsberg Dragon Drinking Horn</h3>
									<h4>Product code: 333</h4>
								</div>
							</td>
							<td className="quantity">
								<CartQuantity
									stock={10}
									onAdd={''}
								/>
							</td>
							<td className="subtotal">$222.00</td>
						</tr>
						<tr class="Cart__product">
							<td className="trash"><FiTrash2/></td>
							<td className="price">$29.99</td>
							<td className="info">
								<img src={img} alt="" />
								<div>
									<h3>Lingsberg Dragon Drinking Horn</h3>
									<h4>Product code: 333</h4>
								</div>
							</td>
							<td className="quantity">
								<CartQuantity
									stock={10}
									onAdd={''}
								/>
							</td>
							<td className="subtotal">$222.00</td>
						</tr>
						<tr class="Cart__product">
							<td className="trash"><FiTrash2/></td>
							<td className="price">$29.99</td>
							<td className="info">
								<img src={img2} alt="" />
								<div>
									<h3>Lingsberg Dragon Drinking Horn</h3>
									<h4>Product code: 333</h4>
								</div>
							</td>
							<td className="quantity">
								<CartQuantity
									stock={10}
									onAdd={''}
								/>
							</td>
							<td className="subtotal">$222.00</td>
						</tr>
					</table>
					<button
						type="button"
						className="btn btn--outline btn--danger"
					>
						Empty Cart <FiTrash2/>
					</button>
				</section>

				<section className="Cart__resume">
					<h3>Resume Cart Information</h3>
					<h4>Order total: <span>$22653653</span></h4>
					<h4>Total Products: <span>4</span></h4>
					<button
						type="button"
						className="btn"
					>
						CheckOut <FiSend/>
					</button>
				</section>

			</div>
		</section>
	)
}

export default Cart
