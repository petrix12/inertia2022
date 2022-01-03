const app = Vue.createApp({
    data(){
        return {
            textSize: 1,
            course:{
                id: 1,
                name: 'Vue.js',
                price: '$50'
            }
        }
    },
    methods: {
        crecer(size){
            this.textSize += size
        }
    }
})

app.component('button-counter', {
    data(){
        return {
            count: 0
        }
    },

    template: `
        <button @click="count++">
            Haz hecho click {{ count }} veces
        </button>
    `
})

app.component('detail-course', {
    data(){
        return {

        }
    },

    props: ['course'],

    template: `
        <h1>{{ course.name }}</h1>
        <p>Precio: {{ course.price }}</p>
        <slot></slot>
        <button @click="$emit('crecerTexto', 0.2)">Incrementar tamaño</button>
    `
})