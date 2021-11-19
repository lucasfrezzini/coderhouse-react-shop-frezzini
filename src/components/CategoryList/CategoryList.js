import './CategoryList.scss';
import Category from '../Category/Category';

const CategoryList = ({categories}) => {

	return (
		<div className="CategoryList">
			{categories.map((category, idx) => (
				<Category {...category} key={idx}/>
			))}
		</div>
	)
}

export default CategoryList
