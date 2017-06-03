<template>
	<div class="container">
		<el-row :gutter="20">
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<span v-bind:title="title">
						鼠标悬停几秒钟查看此处动态绑定的提示信息！
					</span>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<span v-if="flag">测试v-if</span>
					<span>|</span>
					<span v-show="flag">测试v-show</span>
					<input @click="toggle" type="button" value="显示/隐藏" />
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<input v-model="msg" type="text" /><span>{{ msg }}</span>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<input v-model="cbk" type="checkbox" /><span>{{ cbk }}</span>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<div class="grid-content bg-purple-light">
					
					<ol>
						<li v-for="item in todos">
							{{ item.text }}
							<button @click="del(item)">delete</button>
						</li>
					</ol>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				msg: 'hello world',
				cbk: false,
				title: '页面加载于' + new Date(),
				flag: true,
				todos: [
			      { index: 0, text: '学习 JavaScript' },
			      { index: 1, text: '学习 Vue' },
			      { index: 2, text: '整个牛项目' }
			   ]
			}
		},
		methods: {
			toggle () {
				this.flag = !this.flag
			},
			del (todo) {
				for(var i = 0; i < this.todos.length; i++) {
					if(this.todos[i].index === todo.index) {
						this.todos.splice(i, 1)
						break;
					}
				}				
			}
		}
	}
</script>
<style lang="scss" scoped>
	
</style>