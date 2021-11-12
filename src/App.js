import { useState } from "react";
import { ItemListContainer } from "./components/layout/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ItemCount } from "./components/ItemCount/ItemCount";

import "./App.scss";

function App() {
	const [cart, setCart] = useState(0);
	// const stock = 5;

	// const onAdd = (value) => {
	// 	setCart(cart + value);
	// 	alert('Cargado al carrito ' + cart + ' productos.')
	// }

  return (
    <div className="App">
      <NavBar cart={cart}/>
			<HeroSection />
			<ItemListContainer
				greeting="Hola señor Rodrigo Collins"
			/>
    </div>
  );
}

export default App;
