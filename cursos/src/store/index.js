import { createStore } from 'vuex'

export default createStore({
    state: {
		auth: null
    },
    mutations: {
		setAuth(state, auth) {
			state.auth = auth
		}
    },
    actions: {
		setAuth({ commit }) {
			if(localStorage.getItem('auth')){
				commit('setAuth', JSON.parse(localStorage.getItem('auth')));
			}
		},
		logout() {
			localStorage.removeItem('auth')
			location.reload()
		}
    },
    modules: {
    }
})
