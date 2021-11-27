import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "context/CartContext";

import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Cart from "pages/Cart/Cart";
import NavBarProvider from "context/NavBarContext";

function App() {

  return (
    <div className="App">
			<CartProvider>
			<NavBarProvider>
				<BrowserRouter>
					<NavBar/>
						<Routes>
							<Route index element={<Home />} />
							<Route path="category" element={<ItemListContainer/>} >
								<Route path=":slugCategory" element={<ItemListContainer />} />
							</Route>
							<Route path="product/:idProduct" element={<ItemDetailContainer/>} />
							<Route path="cart" element={<Cart/>} />
							<Route path="about-us" element={<About />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					<Footer/>
				</BrowserRouter>
			</NavBarProvider>
			</CartProvider>
    </div>
  );
}

export default App;
