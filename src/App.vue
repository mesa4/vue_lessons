<template>
		<div id="app">
				<div>
						<input type="text" v-model="fruitName">
						<button @click="addFruit">
								add fruit
						</button>
				</div>

				<div>
						isVisibleList
						<input type="checkbox" v-model="isVisibleList" />
				</div>

				<div>
						fruitsListName
						<input type="text" v-model="fruitsListName">
				</div>

				<TheList
						v-if="isVisibleList"
						:list-name="fruitsListName"
						:list="fruitsList"
				/>
		</div>
</template>

<script>
import TheList from '@/components/the-list';
// import TheInput from '@/components/the-input/the-input';

export default {
		name: 'App',
		components: {
				// TheInput,
				TheList
		},
		data() {
				return {
						isVisibleList: true,
						fruitsListName: '',
						fruitName: '',
						fruitsList: ['apple', 'banana']
				}
		},
		watch: {

		},
		computed: {

		},
		methods: {
				addFruit() {
						this.fruitsList.push(this.fruitName)
				}
		}
};
</script>

<style lang="scss">
#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin-top: 60px;
}
</style>
