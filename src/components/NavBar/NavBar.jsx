import logo from '../../assets/images/logo.png';
import { FiShoppingCart } from "react-icons/fi";
import './NavBar.scss';

const NavBar = () => {
    return (
        <header>
            <a href="#" className="logo">VALKYUM</a>
            <nav>
                <ul>
                    <li><a href="#">Necklaces</a></li>
                    <li><a href="#">Rings</a></li>
                    <li><a href="#">Bracelets</a></li>
                    <li><a href="#">Earrings</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            <button><FiShoppingCart/></button>
        </header>
    )
}

export { NavBar }