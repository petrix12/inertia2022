<template>
	<div class="hello">
		<!-- <h1>{{ msg }}</h1> -->
		<h1>{{ prueba }}</h1>
		<button @click="prueba += '+'">Cambiar valor de prueba</button>
		<p>
			For a guide and recipes on how to configure / customize this project,<br>
			check out the
			<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
		</p>
		<h3>Installed CLI Plugins</h3>
		<ul>
			<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
			<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
		</ul>
		<h3>Essential Links</h3>
		<ul>
			<li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
			<li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
			<li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
			<li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
			<li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
		</ul>
		<h3>Ecosystem</h3>
		<ul>
			<li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
			<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
			<li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
			<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
			<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	},
	data(){
		return {
		prueba: "HS++ Saludo original"
		}
	},
	beforeCreate(){
		// Este método se ejecuta antes de crearse el componente
		console.log('beforeCreate')
		this.prueba = "HS++ Saludo desde beforeCreate"
	},
	created(){
		// Este método se ejecuta luego de crearse el componente (pero aún no se ha montado)
		console.log('created')
		this.prueba = "HS++ Saludo desde created"
	},
	mounted(){
		// Este método se ejecuta luego de montarse el componente
		console.log('mounted')
		alert('Componente montado')
	},
	updated(){
		// Este método se ejecuta cuando ocurre algún cambio en el componente
		console.log('updated')
	},
	unmounted(){
		// Este método se ejecuta luego de desmontarse el componente
		console.log('unmounted')
		alert('Componente desmontado')
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
