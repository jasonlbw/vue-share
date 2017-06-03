<template>
	<div class="todo-list-example">
		<input 
		type="text"
		v-model="newTodoText"
		@keyup.enter="addTodo"
		placeholder="请添加一本书"
		/>
		<ul>
			<li v-for="(item, index) in todos" >
				<span @click="toggle(item)" :class="{item, finished: item.finished}" :title="item.label">{{ item.label }}</span>
				<button @click="removeTodo(index)">删除</button>
			</li>
		</ul>
		<p>已完成：{{completed}}，未完成：{{ nonFinished }}</p>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				newTodoText: '',
				todos: [
					{
						finished: false,
						label: 'javascript权威指南'
					},
					{
						finished: false,
						label: 'javascript高级程序设计'
					},
					{
						finished: false,
						label: 'NodeJs开发指南'
					},
					{
						finished: false,
						label: '深入浅出NodeJs'
					}
				]
			}
		},
		computed: {
			completed () {
				return this.todos.filter((todo) => {
					return todo.finished
				}).length
			},
			nonFinished () {
				return this.todos.length - this.completed
			}
		},
		methods: {
			addTodo () {
				this.todos.push({
					finished: false,
					label: this.newTodoText
				})
				this.newTodoText = ''
			},
			removeTodo (index) {
				this.todos.splice(index, 1)
			},
			toggle (item) {
				item.finished = !item.finished
			}
		}
	}
</script>
<style>
	.item {
		margin: 0 20px;
		background: lightgray;
		cursor: pointer;
	}
	.finished {
		text-decoration: line-through;
	}
</style>