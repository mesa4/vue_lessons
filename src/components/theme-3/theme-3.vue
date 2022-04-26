<template>
		<div>
				<div>
						{{ todoId }}
				</div>
				<hr>
				<div>
						<div v-show="isLoading">
								LOADING...
						</div>
						<input
								v-model="taskName"
								:disabled="isLoading"
								type="text"
								@keyup.enter="addTodo"
						>
						<ul>
								<li
										v-for="todo in storeTodoList"
										:key="todo.id"
								>
										{{ todo.name }}
										<button @click="completeTask(todo.id)">complete task</button>
								</li>
						</ul>
				</div>
				<hr>
				<div>
						{{ completedTodoList }}
				</div>
		</div>
</template>

<script>

import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {
		name: 'Theme3',
		data() {
				return {
						taskName: '',
						isLoading: false
				}
		},
		computed: {
				...mapState({
						storeTodoList: 'todoList',
						todoId: 'count',
				}),
				...mapGetters({
						completedTodoList: 'completedTodoList'
				})
		},
		methods: {
				...mapMutations({
						storeIncrement: 'increment',
						storeCompleteTask: 'completeTask'
				}),
				...mapActions({
						storeAddTodo: 'addTodo'
				}),
				async addTodo() {
						this.isLoading = true;
						try {
								const todo = {
										id: this.todoId,
										name: this.taskName,
										status: 'new'
								};
								await this.storeAddTodo(todo)
						} catch (error) {
								console.log('addTodo ERROR: ', error);
						} finally {
								this.isLoading = false;
						}
				},
				completeTask(id) {
						this.storeCompleteTask(id)
				}
		}
}
</script>

<style lang="scss">
</style>