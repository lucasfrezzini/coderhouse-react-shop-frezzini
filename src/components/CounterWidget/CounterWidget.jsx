import './CounterWidget.scss';
import { FiShoppingCart } from "react-icons/fi";

const CartWidget = ({ counterItems }) => {
    return (
        <button>
            <FiShoppingCart/>
            { counterItems > 0 && <span className="counterItems">{counterItems}</span> }
        </button>
    );
}

export { CartWidget }
