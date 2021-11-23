import './InfoAboutUs.scss';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import { FiArrowRight } from 'react-icons/fi';

const InfoAboutUs = ({title, text, button}) => {
    return (
        <div className="InfoAboutUs">
            <h2>{title}</h2>
            <h3>{text}</h3>
						{
							button &&
							<Link to="/about-us">
							<Button
								text="More about us"
								icon={<FiArrowRight/>}
								type="button"
								variant="Button__large"
							/>
							</Link>
						}
        </div>
    );
}

export { InfoAboutUs }
