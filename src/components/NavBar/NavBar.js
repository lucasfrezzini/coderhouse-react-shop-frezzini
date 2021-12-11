import './NavBar.scss'
import { useContext } from 'react'
import { CartContext } from 'context/CartContext'
import { NavBarContext } from 'context/NavBarContext'
import { NavLink, Link } from "react-router-dom"
import CartWidget from 'components/CartWidget/CartWidget'
import { FiServer } from 'react-icons/fi'


const NavBar = () => {
	const { calculateTotalItem } = useContext(CartContext)
	const { toggleMenu, handleToggleMenu } = useContext(NavBarContext)

	return (
		<header className="NavBar">
			<div className="container">
				<Link to="/" className="logo">VALKYUM</Link>
				<nav className={toggleMenu && `showMenu`}>
					<ul>
						<li><NavLink to="/">Home</NavLink></li>
						<li><NavLink to="category/rings">Rings</NavLink></li>
						<li><NavLink to="category/necklaces">Necklaces</NavLink></li>
						<li><NavLink to="category/earrings">Earrings</NavLink></li>
						<li><NavLink to="category/drinking-horns">Drinking Horns</NavLink></li>
						<li><NavLink to="about-us">About</NavLink></li>
					</ul>
				</nav>
				<div>
				<FiServer className="NavBar__icon" onClick={handleToggleMenu} />
				<CartWidget
					counterItems={calculateTotalItem()}
				/>
				</div>
			</div>
		</header>
	)
}

export default NavBar
