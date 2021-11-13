import './Footer.scss';
import { FiTwitter, FiGithub, FiInstagram } from 'react-icons/fi'
const Footer = () => {
	return (
		<footer className="Footer">
			<a href="#" className="logo">VALKYUM</a>
			<nav class="Footer__sections">
				<a href="index.html">Necklaces</a>
				<a href="index.html">Rings</a>
				<a href="index.html">Bracelets</a>
				<a href="index.html">Earrings</a>
				<a href="index.html">About</a>
			</nav>
			<nav class="Footer__socials">
				<a href="#"><FiTwitter/></a>
				<a href="#"><FiGithub/></a>
				<a href="#"><FiInstagram/></a>
			</nav>
		</footer>
	)
}

export default Footer
