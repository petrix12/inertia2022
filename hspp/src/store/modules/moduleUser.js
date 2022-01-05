/* export  */const moduleUser = {
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
}

export default moduleUser