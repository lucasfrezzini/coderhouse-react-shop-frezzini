import './SectionHeader.scss'
import { Link } from 'react-router-dom'


const SectionHeader = ({isHome, title, button, icon}) => {
	return (
		<header className={`SectionHeader ${isHome && "isHome"}`}>
			<h3>{title}</h3>
			{
				button && isHome &&
				<Link to="/category">
				<button
					type="button"
					className="btn"
				>
					See all items {icon}
				</button>
				</Link>
			}
		</header>
	)
}

export default SectionHeader
