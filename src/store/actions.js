export const loadData = ({commit}) => {
	axios.get(baseUrl + 'data.json')
			 .then(({data}) => {
			 	if(data) {
			 		const stocks = data.stocks;
			 		const funds = data.funds;
			 		const stockPortfolio = data.stockPortfolio;

			 		const portfolio = {
			 			stockPortfolio,
			 			funds
			 		};

			 		commit('SET_STOCKS', stocks);
			 		commit('SET_PORTFOLIO', portfolio);
			 	}
			 });
}