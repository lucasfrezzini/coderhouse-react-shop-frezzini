import './NotFound.scss'
import { useContext, useEffect } from 'react'
import { NavBarContext } from 'context/NavBarContext'

import { Link } from "react-router-dom"
import CategoryListContainer from "pages/CategoryListContainer/CategoryListContainer"

function NotFound() {
	const {toggleMenu, setToggleMenu} = useContext(NavBarContext)

	useEffect(() => {
		window.scrollTo(0, 0)
		setToggleMenu(!toggleMenu)
	}, [])

  return (
		<>
    <div className="NotFound">
			<div className="container">
				<h1>404 Page Not Found</h1>
				<p>The page you were looking for does not exist. <Link to="/category">Click here</Link> to continue shopping.</p>
			</div>
		</div>
		<CategoryListContainer />
		</>
  )
}

export default NotFound
