import './Footer.scss';
import { NavLink, Link } from 'react-router-dom';
import { FiTwitter, FiGithub, FiInstagram } from 'react-icons/fi'
const Footer = () => {
	return (
		<footer className="Footer">
			<Link to="/" className="logo">VALKYUM</Link>
			<nav className="Footer__sections">
				<NavLink to="category/1">Rings</NavLink>
				<NavLink to="category/2">Necklaces</NavLink>
				<NavLink to="category/3">Earrings</NavLink>
				<NavLink to="category/4">Drinking Horns</NavLink>
				<NavLink to="about-us">About</NavLink>
			</nav>
			<nav className="Footer__socials">
				<a href="https://twitter.com/lucasfrezzini" target="_blank"><FiTwitter/></a>
				<a href="https://github.com/lucasfrezzini" target="_blank"><FiGithub/></a>
				<a href="https://www.instagram.com/lucasfrezzini/" target="_blank"><FiInstagram/></a>
			</nav>
		</footer>
	)
}

export default Footer
