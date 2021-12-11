import { useEffect, useContext } from "react"
import { NavBarContext } from "context/NavBarContext"

import SectionAboutUs from "pages/SectionAboutUs/SectionAboutUs"
import ImageAboutUs from "components/ImageAboutUs/ImageAboutUs"
import InfoAboutUs from "components/InfoAboutUs/InfoAboutUs"


import imgAboutUs from 'assets/images/about-us-bg.png'
import imgAboutUs2 from 'assets/images/about-us-bg-2.jpg'


function About() {
	const {toggleMenu, setToggleMenu} = useContext(NavBarContext)

	useEffect(() => {
		window.scrollTo(0, 0)
		setToggleMenu(!toggleMenu)
	}, [])

  return (
		<SectionAboutUs>
			<ImageAboutUs
				img={imgAboutUs}
				alt="Viking jewelry"
			/>

			<InfoAboutUs
				button={false}
				title="Viking jewelry, decor and more"
				text="The Vikings were a seafaring people from the late eighth to early 11th century who established a name for themselves as traders, explorers and warriors."
			>
				<p>They discovered the Americas long before Columbus and could be found as far east as the distant reaches of Russia. </p>
				<p>A culture that doesn't adapt, develop and find a contemporary footing is dead, or in a best case scenario just an echo from the past. Our heritage is very much alive to us - it's not something that just exists in the past, or that requires dressing up in traditional clothes for reenactment gatherings. </p>
			</InfoAboutUs>

			<InfoAboutUs
				button={false}
				title="Building a bridge to the past"
				text="Valkyum is a Argentine company founded in 2014 with the goal of sharing our heritage and our modern-day lifestyle with the rest of the world. "
			>
				<p>We are dedicated to making and selling the highest quality Viking reproductions on the market, ranging from simple pendants to unique high end products not found elsewhere. </p>
				<p>In addition to historical items, we also offer contemporary products that have been inspired by and interpreted from Viking Age culture. We have supplied various TV and movie productions with items (Game of Thrones, Vikings, Beforeigners, etc), crafted reproductions for museums (Birka, Skara etc) and merchandise for bands (Amon Amarth, Wardruna).</p>
			</InfoAboutUs>

			<ImageAboutUs
				img={imgAboutUs2}
				alt="Viking jewelry"
			/>
		</SectionAboutUs>
  );
}

export default About;
