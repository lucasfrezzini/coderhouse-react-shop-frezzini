import * as Yup from 'yup'

export const checkoutSchema = Yup.object().shape({
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
})
