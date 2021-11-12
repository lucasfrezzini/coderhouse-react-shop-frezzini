import './ItemListContainer.scss';

const ItemListContainer = ({greeting}) => {

	const items = [
		{
			name: "item1"
		},
		{
			name: "item2"
		},
		{
			name: "item3"
		},
		{
			name: "item4"
		},
	]

	return (
		<section
			className="ItemListContainer"
		>
			<h2>{greeting}</h2>
			{/* Probablmente y lo más logico que acá haya un componente
			Item que sea stateless para que solo muestre la info,
			seguro lo veremos la siguiente clase de Componentes II */}
			<div class="ItemList">
				{items.map(item => (
					<div
						className="ItemContainer"
						key={`item-${item.name}`}
					>
						<h3 >{item.name}</h3>
					</div>
				))}
			</div>

		</section>
	);
}

export { ItemListContainer }
