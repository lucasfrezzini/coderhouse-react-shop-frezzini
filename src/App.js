import "./App.scss";
import { ItemListContainer } from "./pages/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { SectionAboutUs } from "./pages/SectionAboutUs/SectionAboutUs";
import { ImageAboutUs } from "./components/ImageAboutUs/ImageAboutUs";
import { InfoAboutUs } from "./components/InfoAboutUs/InfoAboutUs";

import imgAboutUs from '../src/assets/images/about-us-bg.png';
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import CategoryListContainer from "./pages/CategoryListContainer/CategoryListContainer";

function App() {

  return (
    <div className="App">
      <NavBar cart={10}/>
			<HeroSection />
			<ItemListContainer />
			<CategoryListContainer/>
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
			<ItemDetailContainer/>
			<Footer/>
    </div>
  );
}

export default App;
