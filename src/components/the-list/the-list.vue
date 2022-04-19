<template>
		<div class="the-list">
				<div class="list__name">
						{{ listName }}
				</div>
				<div class="list">
						<div
								v-for="(item, index) in uniqueList"
								:key="`${item}-${index}`"
								class="list__item"
						>
								{{ item }}
						</div>
				</div>
		</div>
</template>

<script>
export default {
		name: 'TheList',
		props: {
				list: {
						type: Array,
						default: () => []
				},
				listName: {
						type: String,
						default: ''
				}
		},
		destroyed() {
				console.log('HOOK destroyed !')
		},
		beforeDestroy() {
				console.log('HOOK beforeDestroy !')
		},
		updated() {
				console.log('HOOK updated !')
		},
		beforeUpdate() {
				console.log('HOOK beforeUpdate !')
		},
		mounted() {
				console.log('HOOK mounted !')
		},
		beforeMount() {
				console.log('HOOK beforeMount !')
		},
		created() {
				console.log('HOOK created !')
		},
		beforeCreate() {
				console.log('HOOK beforeCreate !')
		},
		computed: {
				uniqueList() {
						return [...new Set(this.list)]
				}
		}
}
</script>

<style lang="scss">
.the-list {
		.list {
				padding: 10px;
				background: green;
				width: 200px;
				height: 200px;
		}

		.list__item {
				background: orange;
		}
}
</style>