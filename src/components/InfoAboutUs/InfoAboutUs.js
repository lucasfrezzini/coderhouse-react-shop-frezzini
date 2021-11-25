import './InfoAboutUs.scss';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const InfoAboutUs = ({title, text, button}) => {
    return (
        <div className="InfoAboutUs">
            <h2>{title}</h2>
            <h3>{text}</h3>
						{
							button &&
							<Link to="/about-us">
							<button
								type="button"
								className="btn btn--large"
							>
								More about us <FiArrowRight/>
							</button>
							</Link>
						}
        </div>
    );
}

export default InfoAboutUs
