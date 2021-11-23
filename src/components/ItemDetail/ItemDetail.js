// Core modules for SwiperJS -> Slider
import { Navigation, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/virtual/virtual.scss'; // Pagination module
// Core modules for SwiperJS -> Slider

import './ItemDetail.scss';
import { useState, useEffect } from 'react';
import Button from 'components/Button/Button';
import {ItemCount} from 'components/ItemCount/ItemCount';
import { FiShoppingCart } from 'react-icons/fi';

// import imgSlider from '../../assets/images/slider.jpg'

const ItemDetail = ({item}) => {
	console.log('item itemDetail', item)
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
					{
						item.sizes &&
						<>
						<div>
							<h3>Sizes</h3>
							<p>{item.sizes}</p>
						</div>
						</>
					}
					{
						item.material &&
						<>
						<div>
							<h3>Material</h3>
							<p>{item.material}</p>
						</div>
						</>
					}
					{
						item.size &&
						<>
						<div>
							<h3>Size</h3>
							<p>{item.size}</p>
						</div>
						</>
					}
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
