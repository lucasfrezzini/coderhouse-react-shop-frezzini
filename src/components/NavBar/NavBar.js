import './NavBar.scss';
import { NavLink, Link } from "react-router-dom";
import CartWidget from 'components/CartWidget/CartWidget';


const NavBar = ({cart}) => {
	return (
		<header className="NavBar">
			<div className="container">
				<Link to="/" className="logo">VALKYUM</Link>
				<nav>
					<ul>
						<li><NavLink to="category/1">Rings</NavLink></li>
						<li><NavLink to="category/2">Necklaces</NavLink></li>
						<li><NavLink to="category/3">Earrings</NavLink></li>
						<li><NavLink to="category/4">Drinking Horns</NavLink></li>
						<li><NavLink to="about-us">About</NavLink></li>
					</ul>
				</nav>
				<CartWidget
					counterItems={cart}
			/>
			</div>
		</header>
	)
}

export default NavBar
