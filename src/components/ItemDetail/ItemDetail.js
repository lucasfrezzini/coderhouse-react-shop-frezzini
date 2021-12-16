// Core modules for SwiperJS -> Slider
import { Navigation, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import 'swiper/swiper.scss' // core Swiper
import 'swiper/modules/navigation/navigation.scss' // Navigation module
import 'swiper/modules/virtual/virtual.scss' // Pagination module
// Core modules for SwiperJS -> Slider

import './ItemDetail.scss'
import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ItemCount from 'components/ItemCount/ItemCount'
import { FiCheck, FiShoppingBag, FiArrowLeft, FiAlertOctagon } from 'react-icons/fi'
import { CartContext } from 'context/CartContext'

const ItemDetail = ({item}) => {
	const [ loadingItemCount, setLoadingItemCount ] = useState(false)
	const [ quantity, setQuantity ] = useState(1)
	const [ imagesSlider, setImagesSlider ] = useState([])
	const navigate = useNavigate()

	const {
		id,
		images,
		name,
		price,
		description,
		main_image,
		material,
		sizes,
		size,
		stock
	} = item

	const {
		addToCart,
		isInCart,
	} = useContext(CartContext)

	const isAddingToCart = (isAdding) => {
		if (isAdding) {
			return <button type="btn" className="btn btn--loadedToCart">Loaded to cart <FiCheck/></button>
		} else {
			return <ItemCount stock={stock} initial={quantity} onAdd={onAdd}/>
		}
	}

	const onAdd = (quantity) => {
		setLoadingItemCount(true)
		setTimeout(()=>{
			setLoadingItemCount(false)
		}, 1500)

		setQuantity(quantity)
		addToCart({
			quantity,
			id,
			main_image,
			price,
			name,
			stock
		})
	}

	useEffect(() => {
		try {
			setImagesSlider(images)
		} catch (error){
			console.log(error)
		}
	}, [images])

	return (
		<section className="ItemDetail" >
			<div className="container">
				<button onClick={() => navigate(-1)} className="btn btn--back btn--outline"><FiArrowLeft/> Go Back</button>
			</div>
			<div className="container" >
				<div className="ItemDetail__slider">
					<Swiper
						modules={[Virtual, Navigation]}
						navigation
						spaceBetween={50}
						slidesPerView={1}
						virtual
					>
						<SwiperSlide>{<img src={main_image} alt={name}/>}</SwiperSlide>
						{imagesSlider.map((img, index) => (
							<SwiperSlide
								key={index}
								virtualIndex={index}
							>
								{<img src={img} alt={name}/>}
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="ItemDetail__info">
					<h1>{name}</h1>
					<h2>$ {price}</h2>
					<div>
						<h3>Description</h3>
						<p>{description}</p>
					</div>
					{
						sizes &&
						<div>
							<h3>Sizes</h3>
							<p>{sizes}</p>
						</div>
					}
					{
						material &&
						<div>
							<h3>Material</h3>
							<p>{material}</p>
						</div>
					}
					{
						size &&
						<div>
							<h3>Size</h3>
							<p>{size}</p>
						</div>
					}
					<div>
						{
						isInCart(id) && !loadingItemCount
							? <Link to="/cart"><button type="btn" className="btn">Go to cart <FiShoppingBag/></button></Link>
							:	!(stock > 0)
								? <button type="btn" className="btn btn--outline btn--noStock">No stock <FiAlertOctagon/></button>
								: isAddingToCart(loadingItemCount)
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ItemDetail
