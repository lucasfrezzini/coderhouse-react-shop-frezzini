import './Item.scss'
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from 'context/CartContext';

const Item = ({name, category, price, main_image, id, stock}) => {
	const quantity = 1;
	const [ showAddCartButton, setShowAddCartButton ] = useState(true);

	const {
		addToCart,
		isInCart,
	} = useContext(CartContext);

	const handleAddToCart = () => {
		addToCart({
			quantity,
			stock,
			id,
			main_image,
			price,
			name,
		});
		setShowAddCartButton(false)
	}

	useEffect(() => {
		setShowAddCartButton(isInCart(id))
		console.log(showAddCartButton);
	}, [showAddCartButton])

	return (
		<div className="Item" >
			{
				!showAddCartButton &&
					<>
					<button
						p={`${showAddCartButton}`}
						onClick={handleAddToCart}
						type="button"
						className="btn btn--addCart"
					>
						Add to cart <FiShoppingCart/>
					</button>
					</>
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
