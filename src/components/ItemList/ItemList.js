import Item from '../Item/Item';
import './ItemList.scss';

const ItemList = ({products}) => {

	return (
		<div className="ItemList">
			{products.slice(0,8).map((item, idx) => (
				<Item {...item} key={idx}/>
			))}
		</div>
	)
}

export default ItemList
