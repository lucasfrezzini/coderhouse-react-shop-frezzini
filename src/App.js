import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ItemListContainer } from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound'


function App() {

  return (
    <div className="App">
			<BrowserRouter>
				<NavBar cart={10}/>
					<Routes>
						<Route index element={<Home />} />
						<Route path="category" element={<ItemListContainer/>} >
							<Route path=":idCategory" element={<ItemListContainer />} />
						</Route>
						<Route path="product/:idProduct" element={<ItemDetailContainer/>} />
						<Route path="about-us" element={<About />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				<Footer/>
			</BrowserRouter>
    </div>
  );
}

export default App;
