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
import {ItemCount} from '../ItemCount/ItemCount';
import { FiShoppingCart } from 'react-icons/fi';

import './ItemDetail.scss';
// import imgSlider from '../../assets/images/slider.jpg'

const ItemDetail = ({item}) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		try {
			setImages(item.images)
		} catch (error){
			console.log(error)
		}
	}, [item.images])

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
								{<img src={img} alt={item.name }/>}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="ItemDetail__info">
					<h1>{item.name}</h1>
					<h2>$ {item.price}</h2>
					<div>
						<h3>Description</h3>
						<p>{item.description}</p>
					</div>
					<div>
						<h3>Sizes</h3>
						<p>{item.sizes}</p>
					</div>
					<div>
						<h3>Quantity</h3>
						<ItemCount stock={10} initial={1} />
					</div>
					<Button
						text="Add to cart"
						icon={<FiShoppingCart/>}
						type="button"
					/>
				</div>
			</div>
		</section>
	)
}

export default ItemDetail
