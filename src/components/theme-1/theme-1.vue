<template>
		<div>
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
		name: 'Theme1',
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
}
</script>