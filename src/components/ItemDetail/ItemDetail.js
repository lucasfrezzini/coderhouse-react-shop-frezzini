// Core modules for SwiperJS -> Slider
import { Navigation, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/virtual/virtual.scss'; // Pagination module
// Core modules for SwiperJS -> Slider

import './ItemDetail.scss';
import { useState, useEffect } from 'react';
import {ItemCount} from 'components/ItemCount/ItemCount';
import { FiCheck, FiRefreshCw, FiShoppingBag } from 'react-icons/fi';

// import imgSlider from '../../assets/images/slider.jpg'

const ItemDetail = ({item}) => {
	const [ loadingItemCount, setLoadingItemCount ] = useState(false);
	const [ addCart, setAddCart ] = useState(false);
	const [ quantity, setQuantity ] = useState(1);
	const [ images, setImages ] = useState([]);
	const [changeButton, setChangeButton ] = useState(false);

	const onAdd = (quantity) => {
		setLoadingItemCount(true)
		setTimeout(() => {
			setAddCart(true);
			setLoadingItemCount(false);
			setTimeout(()=>{
				setChangeButton(true);
			}, 1500)
		}, 1000);

		// Luego irá logica para enviar al Context
		// el {} con la info y el quantity debajo
		setQuantity(quantity)
	}

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
						{
						loadingItemCount
							? <button type="button" className="Button Button--addingToCart">Adding to cart <FiRefreshCw/></button>
							: !addCart
								?	<ItemCount stock={10} initial={quantity} onAdd={onAdd}/>
								: !changeButton
									? <button type="button" className="Button Button--loadedToCart">Loaded to cart <FiCheck/></button>
									: <button type="button" className="Button">Go to cart <FiShoppingBag/></button>
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ItemDetail
