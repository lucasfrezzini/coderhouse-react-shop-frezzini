// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import Button from '../Button/Button';
import { FiShoppingCart } from 'react-icons/fi';

import './ItemDetail.scss';
import imgSlider from '../../assets/images/slider.jpg'

const ItemDetail = (props) => {
	console.log(props.item);

	return (
		<section className="ItemDetail" >
			<div className="container" >
				<div className="ItemDetail__slider">
					<img src={imgSlider} alt={props.item.name} />
				</div>
				<div className="ItemDetail__info">
					<h1>{props.item.name}</h1>
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
