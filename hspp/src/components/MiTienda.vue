<template>
    <h1>Tienda HS++</h1>
    <p>Mi nombre es: {{ nombre }}</p>
    <p>Mi apellido es: {{ apellido }}</p>
    <p>El apellido tiene {{ sizeApellido }} letras</p>
    <form @submit.prevent="changeNombreComponente()">
        <input type="text" v-model="nombreComponente">
        <button>Actualizar</button>
    </form>
    
</template>

<script>
/* import { mapState, mapGetters, mapMutations, mapActions } from 'vuex' */
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('user')

export default {
    data(){
        return {
            nombreComponente: ''
        }
    },
    methods: {
        ...mapMutations(/* 'counter',  */['decrement', 'increment']),
        ...mapActions(/* 'user',  */['changeNombre', 'confirmationChangeNombre']),
        changeNombreComponente(){
            this.confirmationChangeNombre(this.nombreComponente).then(() => {
                this.nombreComponente = ''
            })
        }
    },
    computed: {
        ...mapState(/* 'user',  */['nombre', 'apellido', 'count']),
        /* ...mapState({
            nombre: state => state.user.nombre, 
            apellido: state => state.user.apellido, 
            count: state => state.counter.count
        }), */
        ...mapGetters(/* 'user',  */['sizeApellido'])
    }
}
</script>

<style>

</style>