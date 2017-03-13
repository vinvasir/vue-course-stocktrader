<template>
	<div>
		<portfolio-stock v-for="stock in stocks" :stock="stock"></portfolio-stock>
	</div>
</template>

<script type="text/javascript">
	import {mapGetters} from 'vuex';
	import Stock from './Stock.vue';

	export default {
		computed: {
			...mapGetters({
				stocks: 'stockPortfolio'
			})
		},
		components: {
			portfolioStock: Stock
		}
	}
</script>