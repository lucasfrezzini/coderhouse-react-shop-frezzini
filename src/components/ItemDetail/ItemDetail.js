// Core modules imports are same as usual
import { Navigation, Virtual } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// install Swiper modules

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/virtual/virtual.scss'; // Pagination module


import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { FiShoppingCart } from 'react-icons/fi';

import './ItemDetail.scss';
// import imgSlider from '../../assets/images/slider.jpg'

const ItemDetail = (props) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		try {
			setImages(props.item.images)
			console.log(images)
		} catch (error){
			console.log(error)
		}
	}, [props.item.images])

	return (
		<section className="ItemDetail" >
			<div className="container" >
				<div className="ItemDetail__slider">
					<Swiper
						modules={[Virtual, Navigation]}
						navigation
						spaceBetween={50}
						slidesPerView={1}
						virtual
					>
						{images.map((img, index) => (
							<SwiperSlide
								key={index}
								virtualIndex={index}
							>
								{<img src={img} alt={props.item.name }/>}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="ItemDetail__info">
					<h1>{props.item.name}</h1>
					{images.map(img => {
						<p>{props.item.description}</p>
					})}
					<h2>$ {props.item.price}</h2>
					<div>
						<h3>Description</h3>
						<p>{props.item.description}</p>
					</div>
					<div>
						<h3>Sizes</h3>
						<p>{props.item.sizes}</p>
					</div>
					<Button
						text="Add to cart"
						icon={<FiShoppingCart/>}
						type="button"
						variant=""
					/>
				</div>
			</div>
		</section>
	)
}

export default ItemDetail
