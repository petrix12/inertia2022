import { createStore } from 'vuex'
/* import { moduleUser } from './modules/moduleUser'
import { moduleCounter } from './modules/moduleCounter' */
import moduleUser from './modules/moduleUser'
import moduleCounter from './modules/moduleCounter'

/* const moduleUser = {
	namespaced: true,

	state: {
		nombre: 'Leticia',
		apellido: 'Rodríguez'
	},
	getters: {
        sizeApellido(state){
            return state.apellido.length
        }
	},
	mutations: {
		changeNombre(state, nombre){
			state.nombre = nombre
		}
	},
	actions: {
		changeNombre({ commit }, nombre){
			return new Promise((resolve) => {
				setTimeout(() => {
					commit('changeNombre', nombre)
					resolve()
				}, 500)
			})
		},
		async confirmationChangeNombre({ dispatch }, nombre){
			await dispatch('changeNombre', nombre)
			console.log('Actualizado en BD')
		}
	}
} */

/* const moduleCounter = {
	namespaced: true,
	
	state: {
		count: 1
	},
	mutations: {
		decrement(state){
			state.count--
		},
		increment(state){
			state.count++
		}
	}
} */

export default createStore({
	state: {
	},
	modules: {
		user: moduleUser,
		counter: moduleCounter
	}
})