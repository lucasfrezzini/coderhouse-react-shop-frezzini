import { collection, addDoc, Timestamp } from "firebase/firestore/lite"
import { db } from "firebase/config"

export const generateOrder = (values, cart, calculateFinalPrice) => {
	const newOrder = {
		buyer: {...values},
		item: cart,
		total: Number(calculateFinalPrice()),
		date: Timestamp.fromDate( new Date() ),
	}

	const orderReference = collection(db, 'orders')
	const productsReference = collection(db, 'products')
	addDoc(orderReference, newOrder)
		.then(res => {
			console.log(res.id)
		})
}
