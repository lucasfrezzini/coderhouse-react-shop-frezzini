import SectionAboutUs from "pages/SectionAboutUs/SectionAboutUs";
import ImageAboutUs from "components/ImageAboutUs/ImageAboutUs";
import InfoAboutUs from "components/InfoAboutUs/InfoAboutUs";


import imgAboutUs from 'assets/images/about-us-bg.png';


function About() {
  return (
    <>
			<SectionAboutUs>
				<ImageAboutUs
					img={imgAboutUs}
					alt="Viking jewelry"
				/>
				<InfoAboutUs
					button={false}
					title="Viking jewelry, decor and more"
					text="The Vikings were a seafaring people from the late eighth to early 11th century who established a name for themselves as traders, explorers and warriors. They discovered the Americas long before Columbus and could be found as far east as the distant reaches of Russia. "
				/>
			</SectionAboutUs>
    </>
  );
}

export default About;
