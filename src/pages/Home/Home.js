import ItemListContainer from "pages/ItemListContainer/ItemListContainer";
import HeroSection from "components/HeroSection/HeroSection";
import SectionAboutUs from "pages/SectionAboutUs/SectionAboutUs";
import ImageAboutUs from "components/ImageAboutUs/ImageAboutUs";
import InfoAboutUs from "components/InfoAboutUs/InfoAboutUs";


import imgAboutUs from 'assets/images/about-us-bg.png';
import CategoryListContainer from "../CategoryListContainer/CategoryListContainer";


function Home() {

  return (
    <>
			<HeroSection />
			<ItemListContainer isHome />
			<SectionAboutUs>
				<ImageAboutUs
					img={imgAboutUs}
					alt="Viking jewelry"
				/>
				<InfoAboutUs
					button
					title="Viking jewelry, decor and more"
					text="Our website offers nearly a thousand different items including replicas of original Viking artifacts to modern day inspirations."
				/>
			</SectionAboutUs>
			<CategoryListContainer/>
    </>
  );
}

export default Home;
