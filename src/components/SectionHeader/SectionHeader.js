import './SectionHeader.scss';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';


const SectionHeader = ({isHome, title, button, icon, type, variant}) => {
	return (
		<header className={`SectionHeader ${isHome && "isHome"}`}>
			<h3>{title}</h3>
			{
				button && isHome &&
				<Link to="/category">
				<Button
				text="See all items"
				icon={icon}
				type={type}
				variant={variant}
				/>
				</Link>
			}
		</header>
	)
}

export default SectionHeader
