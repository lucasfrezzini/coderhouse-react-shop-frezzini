const { createContext } = require("react");

export const CartContext = createContext([])

const CartProvider = ({ children }) => {

	const addToCart = 0;
	const removeFromCart= 0;
	const isInCart= 0;
	const incrementQuantity= 0;
	const decrementQuantiy= 0;
	const emptyCart= 0;
	const calculateTotalPrice= 0;
	const calculateParcialPrice= 0;


	return (
		<CartContext.Provider
			values={{
				addToCart,
				removeFromCart,
				isInCart,
				incrementQuantity,
				decrementQuantiy,
				emptyCart,
				calculateParcialPrice,
				calculateTotalPrice
			}}
		>
			{ children }
		</CartContext.Provider>
	)
}

export default CartProvider
