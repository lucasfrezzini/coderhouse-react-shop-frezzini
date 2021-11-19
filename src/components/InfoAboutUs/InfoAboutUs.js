import './InfoAboutUs.scss';
import Button from '../Button/Button';
import { FiArrowRight } from 'react-icons/fi';

const InfoAboutUs = ({title, text}) => {
    return (
        <div className="InfoAboutUs">
            <h2>{title}</h2>
            <h3>{text}</h3>
            <Button
							text="More about us"
							icon={<FiArrowRight/>}
							type="button"
							variant="Button__large"
						/>
        </div>
    );
}

export { InfoAboutUs }
