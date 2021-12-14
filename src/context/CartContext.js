import { useState, createContext } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
	const shipping = 94.45
	const giftcards = 2395.44
	const [cart, setCart] = useState([])

	const addToCart = item => {
		if (isInCart(item.id)) {
			const idx = cart.findIndex(i => i.id === item.id)
			let newCart = [...cart]
			newCart[idx].quantity =  newCart[idx].quantity + 1
			setCart(newCart);
		} else {
			setCart([
				...cart,
				item
			])
		}
	}

	const removeFromCart = (id) => {
		setCart(cart.filter(prod => prod.id !== id ))
	}

	const isInCart = (id) => {
		return cart.some( item => item.id === id )
	}

	const incrementQuantity = (id) => {
		const idx = cart.findIndex( item => item.id === id)
		let newCart = [...cart]
		newCart[idx].quantity =  newCart[idx].quantity + 1
		setCart(newCart)
	}
	const decrementQuantity = (id) => {
		const idx = cart.findIndex( item => item.id === id)
		let newCart = [...cart]
		newCart[idx].quantity =  newCart[idx].quantity - 1
		setCart(newCart)
	}

	const emptyCart = () => {
		setCart([])
	}

	const calculateTotalPrice = () => {
		return Number(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))
	}

	const calculateSubTotalPrice = (price, quantity) => {
		return Number((price * quantity).toFixed(2))
	}

	const calculateTotalItem = () => {
		return Number(cart.reduce((acc, item) => acc + item.quantity, 0))
	}

	const calculateFinalPrice = () => {
		return Number(calculateTotalPrice() + shipping + giftcards).toFixed(2)
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				isInCart,
				incrementQuantity,
				decrementQuantity,
				emptyCart,
				calculateTotalPrice,
				calculateSubTotalPrice,
				calculateTotalItem,
				calculateFinalPrice,
				shipping,
				giftcards
			}}
		>
			{ children }
		</CartContext.Provider>
	)
}

export default CartProvider
