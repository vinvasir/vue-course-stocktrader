import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';
window.axios = axios;
window.baseUrl = 'https://vue-stock-trader-eef39.firebaseio.com/';

import App from './App.vue'
import {routes} from './routes.js';
import store from './store/store.js';

Vue.use(VueRouter);

Vue.filter('currency', value => {
	return '$' + value.toLocaleString();
});

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
