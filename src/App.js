import { ItemListContainer } from "./components/layout/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
			<ItemListContainer
				greeting="Hola señor Rodrigo Collins"
			/>
    </div>
  );
}

export default App;
