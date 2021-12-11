import './Footer.scss'
import { NavLink, Link } from 'react-router-dom'
import { FiTwitter, FiGithub, FiInstagram } from 'react-icons/fi'
const Footer = () => {
	return (
		<footer className="Footer">
			<Link to="/" className="logo">VALKYUM</Link>
			<nav className="Footer__sections">
				<NavLink to="/">Home</NavLink>
				<NavLink to="category/rings">Rings</NavLink>
				<NavLink to="category/necklaces">Necklaces</NavLink>
				<NavLink to="category/earrings">Earrings</NavLink>
				<NavLink to="category/drinking-horns">Drinking Horns</NavLink>
				<NavLink to="about-us">About</NavLink>
			</nav>
			<nav className="Footer__socials">
				<a href="https://twitter.com/lucasfrezzini" target="_blank" rel="noreferrer"><FiTwitter/></a>
				<a href="https://github.com/lucasfrezzini" target="_blank" rel="noreferrer"><FiGithub/></a>
				<a href="https://www.instagram.com/lucasfrezzini/" target="_blank" rel="noreferrer"><FiInstagram/></a>
			</nav>
		</footer>
	)
}

export default Footer
