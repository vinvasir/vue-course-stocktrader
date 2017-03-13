import Home from './components/Home.vue';
import Portfolio from './components/Portfolio.vue';
import Stocks from './components/Stock.vue';

export const routes = [
	{ path: '/', component: Home},
	{ path: '/portfolio', component: Portfolio},
	{ path: '/stocks', component: Stocks}
]