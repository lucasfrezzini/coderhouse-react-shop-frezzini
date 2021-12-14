import './Item.scss'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FiAlertOctagon, FiCheckCircle, FiShoppingCart } from 'react-icons/fi'
import { CartContext } from 'context/CartContext'

const Item = ({name, category, price, main_image, id, stock}) => {
	const quantity = 1

	const {
		addToCart,
		isInCart,
	} = useContext(CartContext)

	const handleAddToCart = () => {
		addToCart({
			quantity,
			stock,
			id,
			main_image,
			price,
			name,
		})
	}

	return (
		<div className="Item" >
			{
			!isInCart(id)
				?
					stock >= 1
					? <button
						onClick={handleAddToCart}
						type="button"
						className="btn btn--addCart"
					>
						Add to cart <FiShoppingCart/>
					</button>
					: <button
							type="button"
							className="btn btn--addCart btn--noStock"
						>
							No stock <FiAlertOctagon/>
						</button>

				: <button
						type="button"
						className="btn btn--addCart btn--inCart"
					>
						In cart <FiCheckCircle/>
					</button>
			}
			<Link to={`/product/${id}`}><img src={main_image} alt={name} loading="lazy" /></Link>
			<header>
				<h3>$ {price}</h3>
				<div>
					<h4>{category.name}</h4>
					<h3><Link to={`/product/${id}`}>{name}</Link></h3>
				</div>
			</header>
		</div>
	)
}

export default Item
