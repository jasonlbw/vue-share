<template>
	<div class="container">
		<el-row :gutter="20">
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<p>{{ message }}</p>
					<button @click="reverseMessage">翻转消息</button>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<p v-html="rawHtml"></p>
					<p v-text="rawHtml"></p>
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<span v-bind:class="{ active: isActive, error: isError }">
						测试Class的绑定，对象写法 |
					</span>
					<span :class="[class1, 'test', class2]">
						测试Class的绑定，数组写法
					</span>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<span :style="{ color: activeColor, fontSize: fontSize + 'px' }">
						测试Style的绑定，对象写法 |
					</span>
					<span :style="[styleObj1, styleObj2]">
						测试Style的绑定，数组写法
					</span>
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<span :title="title">
						鼠标悬停几秒钟查看此处动态绑定的提示信息！
					</span>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<span v-if="flag">测试指令v-if</span>
					<span>|</span>
					<span v-show="flag">测试指令v-show</span>
					<input @click="toggle" type="button" value="显示/隐藏" />
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<input v-model="msg" type="text" /><span style="margin-right:20px;">{{ msg }}</span>
					<input v-model="cbk" type="checkbox" /><span>{{ cbk }}</span>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light">					
					<p>{{ msg | capitalize }}</p>
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
		<el-row>
			<el-col :span="24">
				<div class="grid-content bg-purple-light">
					<simple-counter></simple-counter>
					<simple-counter></simple-counter>
					<simple-counter></simple-counter>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	/*局部组件的封装，验证data为什么必须是一个函数*/
	let tempData = { counter: 0 }
	let simpleCounter = {
		template: '<button @click="counter+=1">{{ counter }}</button>',
		data () {
			return tempData
		}
	}
	export default {
		components: {
			simpleCounter
		},
		data () {
			return {
				message: 'Hello Vue.js!',
				rawHtml: '<b>我是一段HTML</b>',
				msg: 'hello world',
				cbk: false,
				title: '页面加载于' + new Date(),
				flag: true,
				todos: [
			      { index: 0, text: '学习 JavaScript' },
			      { index: 1, text: '学习 Vue' },
			      { index: 2, text: '整个牛项目' }
			   ],
			   isActive: true,
			   isError: false,
			   class1: 'testcss1',
			   class2: 'testcss2',
			   activeColor: 'red',
			   fontSize: '20',
			   styleObj1: {
			   	'color': 'orange'
			   },
			   styleObj2: {
			   	'display': 'inline-block',
			   	'border': '1px solid #CCC',
			   	'transform': 'rotate(7deg)'
			   }
			}
		},
		methods: {
			reverseMessage () {
				this.message = this.message.split('').reverse().join('')
			},
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
		},
		beforeCreate () {
			console.log('about beforeCreate')
		},
		created () {
			console.log('about created')
		},
		beforeMount () {
			console.log('about beforeMount')
		},
		mounted () {
			console.log('about mounted')
		},
		beforeUpdate () {
			console.log('about beforeUpdate')
		},
		updated () {
			console.log('about updated')
		},
		beforeDestory () {
			console.log('about beforeDestory')
		},
		destoryed () {
			console.log('about destoryed')
		}
	}
</script>
<style lang="scss" scoped>
	
</style>