import "./Checkout.scss"
import React, { useContext, useEffect } from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { CartContext } from 'context/CartContext';
import { NavBarContext } from 'context/NavBarContext';

import SectionHeader from "components/SectionHeader/SectionHeader"
import { FiAlertTriangle, FiCreditCard, FiSend, FiTruck } from "react-icons/fi"



const checkoutSchema = Yup.object().shape({
	firstName: Yup.string()
		.required('Required')
		.min(3, 'Too Short!')
		.max(50, 'Too Long!'),
	lastName: Yup.string()
		.required('Required')
		.min(3, 'Too Short!')
		.max(30, 'Too Long!'),
	email: Yup.string().email('Invalid email').required('Required'),
	emailConfirm: Yup.string()
		.email('Invalid email')
		.when("email", {
			is: val => (val && val.length > 0 ? true : false),
			then: Yup.string().oneOf(
				[Yup.ref("email")],
				"Both email need to be the same"
			)
		})
});

const Checkout = () => {
	const {
		calculateTotalPrice,
		calculateFinalPrice,
		shipping,
		giftcards
	} = useContext(CartContext);

	const {setToggleMenu} = useContext(NavBarContext)

	useEffect(() => {
		window.scrollTo(0, 0);
		setToggleMenu(false);
	}, [])

	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		emailConfirm: '',
	}

	return (
		<section className="Checkout">
			<div className="container">
				<SectionHeader title="Checkout" />
			</div>
			<div className="container grid">
				<section className="Checkout__form">
					<header>
						<h3>Billing details</h3>
						<h4>Complete the form please.</h4>
					</header>
					<Formik
						initialValues={initialValues}
						validationSchema={checkoutSchema}
						onSubmit={(values) => {
							// TODO
							// ValidarDatos()
							// GenerarOrden()
						}}
					>
						{(formik) => (
							<Form>
								<div className="form-group">
									<label htmlFor="firstName">Name</label>
									<Field
										className={formik.errors.firstName && formik.touched.firstName && `error`}
										onChange={formik.handleChange}
										type="text"
										id="firstName"
										name="firstName"
										value={formik.values.firstName}
										placeholder="Lucas Nicolás"
									/>
									<ErrorMessage name="firstName">{msg => <span className="error"><FiAlertTriangle/>{msg}</span>}</ErrorMessage>
								</div>
								<div className="form-group">
									<label htmlFor="lastName">Last name</label>
									<Field
										className={formik.errors.lastName && formik.touched.lastName && `error`}
										onChange={formik.handleChange}
										type="text"
										id="lastName"
										name="lastName"
										value={formik.values.lastName}
										placeholder="Frezzini"
									/>
									<ErrorMessage name="lastName">{msg => <span className="error"><FiAlertTriangle/>{msg}</span>}</ErrorMessage>
								</div>
								<div className="form-group">
									<label htmlFor="email">Email</label>
									<Field
										className={formik.errors.email && formik.touched.email && `error`}
										onChange={formik.handleChange}
										type="email"
										id="email"
										name="email"
										value={formik.values.email}
										placeholder="lucasnicolasfrezzini@gmail.com"
									/>
									<ErrorMessage name="email">{msg => <span className="error"><FiAlertTriangle/>{msg}</span>}</ErrorMessage>
								</div>
								<div className="form-group">
									<label htmlFor="emailConfirm">Confirm Email</label>
									<Field
										className={formik.errors.emailConfirm && formik.touched.emailConfirm && `error`}
										onChange={formik.handleChange}
										type="email"
										id="emailConfirm"
										name="emailConfirm"
										value={formik.values.emailConfirm}
										placeholder="lucasnicolasfrezzini@gmail.com"
									/>
									<ErrorMessage name="emailConfirm">{msg => <span className="error"><FiAlertTriangle/>{msg}</span>}</ErrorMessage>
								</div>
								<button
									type="submit"
									className="btn btn--large"
								>
									Make Payment <FiSend />
								</button>
							</Form>
						)}
					</Formik>


				</section>

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
			</div>
		</section>
	)
}

export default Checkout
