<template>
	<div class="container">
		<el-row :gutter="20">
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<chooser @on-change="paramsChange('period', $event)" :selections="periods"></chooser>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="grid-content bg-purple-light">
					<selection :selections="types" @on-change="paramsChange('type', $event)"></selection>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24">
				<div class="grid-content bg-purple-light">
					<test>
						<h1 slot="header">
							可复用组件标题
						</h1>
						<p>可复用组件的一个段落</p>
						<p>可复用组件的另一个段落</p>
						<p slot="footer">
							可复用组件底部栏
						</p>
					</test>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import Chooser from '@/components/common/Chooser'
	import Selection from '@/components/common/Selection'
	export default {
		components: {
			Chooser,
			Selection
		},
		data () {
			return {
				periods: [
               {
                  label: '半年',
                  value: 0
               },
               {
                  label: '一年',
                  value: 1
               },
               {
                  label: '三年',
                  value: 2
               }
            ],
            types: [
		         {
		         	label: '入门版',
		         	value: 0
		         },
		         {
		            label: '中级版',
		            value: 1
		         },
		         {
		            label: '高级版',
		            value: 2
		         }
		      ]
			}
		},
		methods : {
			paramsChange (attr, value) {
				console.log(attr, value)
			}
		}
	}
</script>
<style lang="scss" scoped>	
</style>