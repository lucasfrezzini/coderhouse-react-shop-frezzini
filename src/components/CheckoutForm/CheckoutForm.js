import React, { useContext } from "react"

import { CartContext } from 'context/CartContext'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { checkoutSchema } from "helpers/formik/checkoutSchema"
import { FiAlertTriangle, FiSend } from 'react-icons/fi'
import { generateOrder } from "helpers/generateOrder"

const CheckoutForm = () => {
	const {
		cart,
		calculateFinalPrice,
	} = useContext(CartContext)

	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		emailConfirm: '',
	}

	return (
		<section className="Checkout__form">
			<header>
				<h3>Billing details</h3>
				<h4>Complete the form please.</h4>
			</header>
			<Formik
				initialValues={initialValues}
				validationSchema={checkoutSchema}
				onSubmit={(values) => {
					generateOrder(values, cart, calculateFinalPrice)
				}}
			>
				{(formik) => (
					<Form>
						<div className="form-group">
							<label htmlFor="firstName">Name</label>
							<Field
								className={formik.errors.firstName && formik.touched.firstName && `error`}
								type="text"
								id="firstName"
								name="firstName"
								placeholder="Lucas Nicolás"
							/>
							<ErrorMessage name="firstName">{msg => <span className="error"><FiAlertTriangle/>{msg}</span>}</ErrorMessage>
						</div>
						<div className="form-group">
							<label htmlFor="lastName">Last name</label>
							<Field
								className={formik.errors.lastName && formik.touched.lastName && `error`}
								type="text"
								id="lastName"
								name="lastName"
								placeholder="Frezzini"
							/>
							<ErrorMessage name="lastName">{msg => <span className="error"><FiAlertTriangle/>{msg}</span>}</ErrorMessage>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<Field
								className={formik.errors.email && formik.touched.email && `error`}
								type="email"
								id="email"
								name="email"
								placeholder="lucasnicolasfrezzini@gmail.com"
							/>
							<ErrorMessage name="email">{msg => <span className="error"><FiAlertTriangle/>{msg}</span>}</ErrorMessage>
						</div>
						<div className="form-group">
							<label htmlFor="emailConfirm">Confirm Email</label>
							<Field
								className={formik.errors.emailConfirm && formik.touched.emailConfirm && `error`}
								type="email"
								id="emailConfirm"
								name="emailConfirm"
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
	)
}

export default CheckoutForm
