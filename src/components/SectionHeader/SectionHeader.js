import './SectionHeader.scss';
import Button from './../Button/Button';


const SectionHeader = ({title, icon, type, variant}) => {
	return (
		<header className="SectionHeader">
			<h3>{title}</h3>
			<Button
				text="See all items"
				icon={icon}
				type={type}
				variant={variant}
			/>
		</header>
	)
}

export default SectionHeader
