<template>
	<div>
		<h1>Trade or View Your Portfolio</h1>
		<h6>You may Save and Load your Data</h6>
		<h6>Click on 'End Day' to begin a new day!</h6>
		<hr>
		<p>Your Funds: {{ funds | currency }}</p>
	</div>
</template>

<script type="text/javascript">
	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		}
	}
</script>