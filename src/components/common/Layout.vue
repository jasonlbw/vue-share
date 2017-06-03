<template>
	<div>
		<div class="header">
			<el-row :gutter="20">
				<el-col :span="4">
					美信科技有限公司
				</el-col>
				<el-col :span="16">
						<el-menu :default-active="activeIndex" class="header-menu" mode="horizontal" @select="handleSelect">
						<el-menu-item index="0">
							<router-link to="/">首页</router-link>
						</el-menu-item>
						<el-menu-item index="1">
							<router-link to="/about">语法演示</router-link>
						</el-menu-item>

						<el-submenu index="2">
							<template slot="title">组件演示</template>
							<el-menu-item index="2-1">
								<router-link to="/Detail">单选组件</router-link>
							</el-menu-item>
							<el-menu-item index="2-2">
								<router-link to="/showList">showList</router-link>
							</el-menu-item>
						</el-submenu>
					</el-menu>
				</el-col>
				<el-col :span="4">
					<a @click="showLogDialog" v-if="isLogin">登录</a>
					<span v-else>{{ userName }}</span>
				</el-col>
			</el-row>
			
		</div>
		<div class="content">
			<router-view></router-view>	
		</div>
		<div class="footer">
			国美互联网科技有限公司
		</div>
		<my-dialog :is-show="isLogDialpgShow" @on-close="closeLogDialog('isLogDialpgShow')">
			<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
				<el-form-item label="用户名">
					<el-input v-model="userName"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="pwd"></el-input>
				</el-form-item>
				<el-form-item>
				   <el-button type="primary" @click="login()">登录</el-button>
				   <el-button @click="closeLogDialog('isLogDialpgShow')">取消</el-button>
				</el-form-item>
			</el-form>
		</my-dialog>
	</div>
</template>

<script>
	import MyDialog from '@/components/Dialog'
	export default {
		data() {
			return {
				activeIndex: '0',
				isLogDialpgShow: false,
				userName: 'admin',
				pwd: '',
				isLogin: true
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			showLogDialog () {
				this.isLogDialpgShow = true
			},
			closeLogDialog (attr) {
				this[attr] = false
			},
			login () {
				this.isLogin = false
				this.isLogDialpgShow = false
			}
		},
	 	components: {
	 		MyDialog
	 	}
	}
</script>
<style lang="scss">
	.header {
		background: #4590e4;
		height: 64px;
		line-height: 64px;
		color: #FFF;
		padding: 2px 20px 0 20px;
		.header-menu {
			a {
				text-decoration: none;
			}
		}
	}
	.content {		
		position: absolute;
		width: 100%;
		top: 64px;
		bottom: 64px;
		
		.container {
		margin: 20px;
		.el-row {
		margin-bottom: 20px;
			&:last-child {
				margin-bottom: 0;
			}
		}
		.el-col {
		border-radius: 4px;
		}
		.bg-purple-dark {
			background: #99a9bf;
		}
		.bg-purple {
			background: #d3dce6;
		}
		.bg-purple-light {
			background: #e5e9f2;
		}
		.grid-content {
			border-radius: 4px;
			min-height: 50px;
			line-height: 50px;
		}
		.row-bg {
			padding: 10px 0;
			background-color: #f9fafc;
		}
	}
	}
	.footer {
		position: absolute;
		width: 100%;
		bottom: 0;
		background: #4590e4;
		height: 64px;
		line-height: 64px;
		color: #FFF;
		text-align: center;
	}
</style>