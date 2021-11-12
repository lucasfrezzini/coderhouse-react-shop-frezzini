import './NavBar.scss';
import { CartWidget } from '../CounterWidget/CounterWidget';


const NavBar = ({cart}) => {
	return (
		<header>
			<a href="index.html" className="logo">VALKYUM</a>
			<nav>
				<ul>
					<li><a href="index.html">Necklaces</a></li>
					<li><a href="index.html">Rings</a></li>
					<li><a href="index.html">Bracelets</a></li>
					<li><a href="index.html">Earrings</a></li>
					<li><a href="index.html">About</a></li>
				</ul>
			</nav>
			<CartWidget
				counterItems={cart}
			/>

		</header>
	)
}

export { NavBar }
