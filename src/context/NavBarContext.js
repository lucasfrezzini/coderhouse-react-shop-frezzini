import React, { useState } from 'react'


const { createContext } = require("react/cjs/react.development");

export const NavBarContext = createContext(false)


const NavBarProvider = ({children}) => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
	}

	return (
		<NavBarContext.Provider value={{
			toggleMenu,
			setToggleMenu,
			handleToggleMenu
		}}
		>
			{ children }
		</NavBarContext.Provider>
	)
}

export default NavBarProvider

