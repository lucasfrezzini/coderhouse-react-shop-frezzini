import React, { useState, useEffect } from 'react'


const { createContext } = require("react/cjs/react.development");

export const NavBarContext = createContext(false)


const NavBarProvider = ({children}) => {
	const [toggleMenu, setToggleMenu] = useState(false)
	const API_URL = 'https://619451004acf9c64d5cf9356.mockapi.com/category';
	// TODO CATEGORIES MAP IN NAVBAR
	// const [categories, setCategories] = useState([]);

	// useEffect(() => {
	// 	fetch(API_URL)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setCategories(data)
	// 		})
	// 		.catch(e => console.log(e))
	// }, [])

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
	}

	return (
		<NavBarContext.Provider value={{
			toggleMenu,
			setToggleMenu,
			handleToggleMenu,
			// categories
		}}
		>
			{ children }
		</NavBarContext.Provider>
	)
}

export default NavBarProvider

