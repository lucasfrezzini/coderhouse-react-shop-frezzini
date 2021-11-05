import './NavBar.scss';
import { CartWidget } from '../CounterWidget/CounterWidget';


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
			<CartWidget
				counterItems={5}
			/>

		</header>
	)
}

export { NavBar }
