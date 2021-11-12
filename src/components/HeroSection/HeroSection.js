import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import Button from "../Button/Button"
import './HeroSection.scss';

const HeroSection = () => {
	return (
		<section className="HeroSection">
			<div className="container">
				<div className="HeroSection__info">
					<h1>WELCOME TO THE LAND OF VIKINGS</h1>
					<h2>The largest Viking Shop, full of various Viking items and Nordic Spirit!</h2>
					<Button
						text="Go to premium items"
						icon={<FiArrowRight/>}
						type="button"
						size="Button__large"
					/>
				</div>
			</div>
		</section>
	)
}

export { HeroSection }
