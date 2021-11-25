import './HeroSection.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
	return (
		<section className="HeroSection">
			<div className="container">
				<div className="HeroSection__info">
					<h1>WELCOME TO THE LAND OF VIKINGS</h1>
					<h2>The largest Viking Shop, full of various Viking items and Nordic Spirit!</h2>
					<Link to="/category">
					<button
						type="button"
						className="btn btn--large"
					>
						Go to premium items <FiArrowRight/>
					</button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
