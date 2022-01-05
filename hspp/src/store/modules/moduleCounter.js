/* export  */const moduleCounter = {
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
}

export default moduleCounter