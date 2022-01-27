<template>
	<div class="navigation">
		<router-link to="/">Home</router-link> |
		<router-link :to="{name: 'CoursesList'}">Cursos</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link :to="{name: 'Dashboard'}">Dashboard</router-link>
	</div>

	<div v-if='auth' class="mb-3">
		<button class="btn btn-danger" @click="logout">
			Cerrar sesión
		</button>
	</div>

	<div v-else class="navigation">
		<router-link :to="{name: 'Login'}">Login</router-link> |
		<router-link :to="{name: 'Register'}">Register</router-link>
	</div>

	<router-view />
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['auth'])
    },
	methods: {
		...mapActions(['setAuth', 'logout'])
	},
	watch: {
		auth(newValue) {
			if(newValue){
				this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + newValue.token.access_token	
			}
		}
	},
	created() {
		this.setAuth();
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.navigation {
	margin: 30px;
}

.navigation a {
	font-weight: bold;
	color: #2c3e50;
}

.navigation a.router-link-exact-active {
	color: #42b983;
}
</style>