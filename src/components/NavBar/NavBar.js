import './NavBar.scss'
import { useContext } from 'react'
import { CartContext } from 'context/CartContext'
import { NavBarContext } from 'context/NavBarContext'
import { CategoriesContext } from 'context/CategoriesContext'
import { NavLink, Link } from "react-router-dom"
import CartWidget from 'components/CartWidget/CartWidget'
import { FiServer } from 'react-icons/fi'


const NavBar = () => {
	const { categories } = useContext(CategoriesContext)
	const { calculateTotalItem } = useContext(CartContext)
	const { toggleMenu, handleToggleMenu } = useContext(NavBarContext)

	return (
		<header className="NavBar">
			<div className="container">
				<Link to="/" className="logo">VALKYUM</Link>
				<nav className={toggleMenu && `showMenu`}>
					<ul>
						<li><NavLink to="/">Home</NavLink></li>
						{
						categories.map((cat, idx) =>
							<li key={idx}><NavLink to={`category/${cat.slug}`}>{cat.name}</NavLink></li>
						)
						}
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
