import React, { useState, createContext } from 'react'

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

