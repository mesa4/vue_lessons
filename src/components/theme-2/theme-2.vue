<template>
		<div>
				<button @click="addTodo">addTodo</button>
				<h2>{{ taskListStatus }}</h2>
				<ul>
						<li
								v-for="(task, index) in todoList"
								:key="`task-${index}`"
						>
								<div>
										{{ index + 1 }} {{ task }}
								</div>
								<button @click="deleteTask(index)">
										удалить тасочку
								</button>
						</li>
				</ul>
				<h2>Ли лист</h2>
				<ul class="li-list">
						<li
								v-for="(task, index) in liList"
								:key="`li-item-${index}`"
						>
								<div>
										{{ index + 1 }} {{ task }}
								</div>
						</li>
				</ul>
		</div>
</template>

<script>

import { mapActions, mapState } from 'vuex';

export default {
		name: 'Theme2',
		data() {
				return {
						todoList: [
								'do some shit',
								'do some shit again',
								'push the button',
								'do not push the button',
								'трали вали',
								'тили пили',
								'надоили',
						]
				}
		},
		computed: {
				...mapState({
						count: 'count'
				}),
				taskListStatus() {
						return this.todoList.length
								? 'У тебя много задач, парень'
								: 'Ебать, нехуй шо делать'
				},
				liList() {
						return this.todoList.filter(task => task.includes('ли'))
				}
		},
		watch: {
				todoList(value) {
						if (value.length < 2) {
								this.warningTask()
						}
				}
		},
		methods: {
				...mapActions({
						storeAddTodo: 'addTodo'
				}),
				deleteTask(taskId) {
						this.todoList.splice(taskId, 1);
				},
				warningTask() {
						alert('ОГОГО парень, палегще')
				},
				addTodo() {
						this.storeAddTodo({
								id: this.count,
								name: 'fehuefewfewff',
								status: 'new'
						})
				}
		}
}
</script>

<style lang="scss">
ul {
		margin: 20px 0;

		li {
				margin: 20px 0;
		}
}

.li-list {
		li {
				background: aquamarine;
		}
}
</style>