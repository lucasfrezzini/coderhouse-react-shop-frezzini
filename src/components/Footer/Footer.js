import './Footer.scss';
import { FiTwitter, FiGithub, FiInstagram } from 'react-icons/fi'
const Footer = () => {
	return (
		<footer className="Footer">
			<a href="/index.html" className="logo">VALKYUM</a>
			<nav className="Footer__sections">
				<a href="index.html">Necklaces</a>
				<a href="index.html">Rings</a>
				<a href="index.html">Bracelets</a>
				<a href="index.html">Earrings</a>
				<a href="index.html">About</a>
			</nav>
			<nav className="Footer__socials">
				<a href="/index.html"><FiTwitter/></a>
				<a href="/index.html"><FiGithub/></a>
				<a href="/index.html"><FiInstagram/></a>
			</nav>
		</footer>
	)
}

export default Footer
