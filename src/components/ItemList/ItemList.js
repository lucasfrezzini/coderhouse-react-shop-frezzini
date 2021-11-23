import './ItemList.scss';
import Item from 'components/Item/Item';

const ItemList = ({products}) => {

	return (
		<div className="ItemList">
			{products.map((item, idx) => (
				<Item {...item} key={idx}/>
			))}
		</div>
	)
}

export default ItemList
