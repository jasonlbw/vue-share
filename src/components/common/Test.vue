<template>
	<div class="container">
		<header>
			<slot name="header"></slot>
		</header>
		<main>
			<span class="test" @click="hello">我是测试全局组件，点击我</span>
			<slot></slot>
		</main>
		<footer>
			<slot name="footer"></slot>
		</footer>
	</div>
</template>
<script>
	export default {

	}
</script>
<style scoped>
	.test {
		cursor: pointer;
	}
</style>