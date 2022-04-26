import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		count: 1,
		todoList: []
	},
	getters: {
		completedTodoList: state => state.todoList.filter(item => item.status === 'completed')
	},
	mutations: {
		increment (state) {
			state.count++
		},
		addTodo (state, todo) {
			state.todoList = [todo, ...state.todoList]
		},
		completeTask(state, taskId) {
			state.todoList = state.todoList.map(task => {
				if (task.id === taskId) {
					return {
						...task,
						status: 'completed'
					}
				}
				return task
			})
		}
	},
	actions: {
		addTodo({ commit }, payload) {
			return new Promise((resolve) => {
				setTimeout(() => {
					commit('addTodo', payload);
					commit('increment');

					resolve(payload)
				}, 1500)
			})
		}
	}
});

export {
	store
}