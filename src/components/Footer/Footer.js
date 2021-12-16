import './Footer.scss'
import { useContext } from 'react'
import { CategoriesContext } from 'context/CategoriesContext'

import { NavLink, Link } from 'react-router-dom'
import { FiTwitter, FiGithub, FiInstagram } from 'react-icons/fi'

const Footer = () => {
	const { categories } = useContext(CategoriesContext)

	return (
		<footer className="Footer">
			<Link to="/" className="logo">VALKYUM</Link>
			<nav className="Footer__sections">
				<NavLink to="/">Home</NavLink>
				{
				categories.map((cat, idx) =>
					<NavLink key={idx} to={`category/${cat.slug}`}>{cat.name}</NavLink>
				)
				}
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
