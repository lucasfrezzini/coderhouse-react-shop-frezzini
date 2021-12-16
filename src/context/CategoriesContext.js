import React, { useState, createContext, useEffect } from 'react'
import { db } from 'firebase/config'
import { collection, getDocs } from 'firebase/firestore/lite'

export const CategoriesContext = createContext()

const CategoriesProvider = ({children}) => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		const categoriesReference = collection(db, 'categories')

		getDocs(categoriesReference)
			.then(collection => {
				const getCategoriesFromFirestore = collection.docs.map(doc => doc.data())
				setCategories(getCategoriesFromFirestore)
			})
			.catch(e => console.log(e))
	}, [])

	return (
		<CategoriesContext.Provider value={{
			categories
		}}
		>
			{ children }
		</CategoriesContext.Provider>
	)
}

export default CategoriesProvider
