import './CartWidget.scss'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"

const CartWidget = ({ counterItems }) => {
    return (
			<Link to="/cart">
        <button>
            <FiShoppingCart/>
            { counterItems > 0 && <span className="counterItems">{counterItems}</span> }
        </button>
			</Link>
    );
}

export default CartWidget
