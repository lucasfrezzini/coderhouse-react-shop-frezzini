import { ItemListContainer } from "./components/layout/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { HeroSection } from "./components/HeroSection/HeroSection";
import "./App.scss";
import { SectionAboutUs } from "./components/layout/SectionAboutUs/SectionAboutUs";
import { ImageAboutUs } from "./components/ImageAboutUs/ImageAboutUs";
import { InfoAboutUs } from "./components/InfoAboutUs/InfoAboutUs";

import imgAboutUs from '../src/assets/images/about-us-bg.png';
import Footer from "./components/Footer/Footer";

function App() {
	// const [cart, setCart] = useState(0);
	// const stock = 5;

	// const onAdd = (value) => {
	// 	setCart(cart + value);
	// 	alert('Cargado al carrito ' + cart + ' productos.')
	// }

  return (
    <div className="App">
      <NavBar cart={10}/>
			<HeroSection />
			<ItemListContainer />
			<SectionAboutUs>
				<ImageAboutUs
					img={imgAboutUs}
					alt="Viking jewelry"
				/>
				<InfoAboutUs
					title="Viking jewelry, decor and more"
					text="Our website offers nearly a thousand different items including replicas of original Viking artifacts to modern day inspirations."
				/>
			</SectionAboutUs>
			<Footer/>
    </div>
  );
}

export default App;
