import { stock } from '../data/apiVikings.js';

const getData = (API_URL) => {
	return new Promise((resolve, rejected) => {
		setTimeout(() => {
			resolve(stock)
		}, 1500)
	})
}

export default getData;
