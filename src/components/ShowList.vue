<template>
	<div class="container">
		<el-row :gutter="20">
			<el-col :span="24">
				<div class="grid-content bg-purple-light">
					<todo-list></todo-list>
				</div>
			</el-col>
			<el-col :span="24">
				<div class="grid-content bg-purple-light">
					<test>
						<h1 slot="header">
							todoList标题
						</h1>
						<p>todoList的一个段落</p>
						<p>todoList的另一个段落</p>
						<p slot="footer">
							todoList底部栏
						</p>
					</test>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import TodoList from '@/components/common/TodoList'
	export default {
		components: {
			TodoList
		}
	}
</script>
<style>
	
</style>