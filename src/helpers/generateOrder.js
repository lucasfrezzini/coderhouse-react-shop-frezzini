import { collection, addDoc, Timestamp, query, where, documentId, writeBatch, getDocs } from "firebase/firestore/lite"
import { db } from "firebase/config"
import Swal from "sweetalert2"


export const generateOrder = async (values, cart, calculateFinalPrice, emptyCart) => {

	const newOrder = {
		buyer: {...values},
		item: cart,
		total: Number(calculateFinalPrice()),
		date: Timestamp.fromDate( new Date() ),
	}

	const batch = writeBatch(db)
	const orderReference = collection(db, 'orders')
	const productsReference = collection(db, 'products')
	const q = query(productsReference, where(documentId(), 'in', cart.map(item => item.id)))

	const products = await getDocs(q)
	const outOfStock = []

	products.docs.forEach( item => {
		const itemToUpdate = cart.find(cartItem => cartItem.id === item.id)

		if (item.data().stock >= itemToUpdate.quantity) {
			batch.update(item.ref, {
				stock: item.data().stock - itemToUpdate.quantity
			})
		} else {
			outOfStock.push(itemToUpdate)
		}
	})

	if (!outOfStock.length) {
		addDoc(orderReference, newOrder)
			.then(res => {
				batch.commit()
				Swal.fire({
					icon: 'success',
					title: 'Order complete',
					html: `Thanks for your purchase!<br/> Your Order ID: <strong><span style="color: #a5dc86"> ${res.id}</span></strong>`,
					color: '#fff',
					confirmButtonColor: '#222222',
					confirmButtonText: 'Ok, thanks!',
					background: '#181818',
					backdrop: 'rgb(3 30 6 / 40%)'
				})
				emptyCart()
			})
			.catch(err => {
				Swal.fire({
					icon: 'error',
					title: 'An Error ocurred',
					text: 'Try the purchase later',
					color: '#fff',
					confirmButtonColor: '#222222',
					confirmButtonText: 'Ok, thanks!',
					background: '#181818',
					backdrop: 'rgb(30 3 3 / 40%)'
				})
			})
	} else {
		Swal.fire({
			icon: 'error',
			title: 'We are very sorry',
			html:
			`There is no stock of the following products: <br/>
			<strong> ${outOfStock.map(prod => prod.name).join(', ')} </strong>
			`,
			color: '#fff',
			confirmButtonColor: '#222222',
			confirmButtonText: 'Ok, thanks!',
			background: '#181818',
			backdrop: 'rgb(30 3 3 / 40%)'
		})
	}

}
