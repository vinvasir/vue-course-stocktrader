<template>
  <div>  
    <app-header></app-header>		
    <div class="container">
    	<router-view></router-view>
    </div>
  </div>
</template>

<script>
		import Header from './components/Header.vue';
    export default {
    	components: {
    		appHeader: Header
    	},
    	created() {
    		this.$store.dispatch('initStocks');
    	}
    }
</script>

<style>
.container {
	padding-top: 30px;
}
</style>
