import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { SectionAboutUs } from "../SectionAboutUs/SectionAboutUs";
import { ImageAboutUs } from "../../components/ImageAboutUs/ImageAboutUs";
import { InfoAboutUs } from "../../components/InfoAboutUs/InfoAboutUs";

import imgAboutUs from '../../assets/images/about-us-bg.png';

function Home() {

  return (
    <>
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
			<CategoryListContainer/>
    </>
  );
}

export default Home;
