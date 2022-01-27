import { use } from 'vue-router';
<template>
    <h1>Editar curso</h1>
    <form @submit.prevent="updateCourse">
        <div>
            <label for="title">Título</label>
            <br>
            <input v-model="course.title" id="title" type="text" placeholder="Ingrese el título del curso">
        </div>
        <br>
        <div>
            <label for="description">Descripción</label>
            <br>
            <textarea v-model="course.description" id="description" type="text" placeholder="Ingrese la descripción del curso"></textarea>
        </div>
        <br>
        <div>
            <label for="categories">Categoría</label>
            <br>
            <select name="" id="categories" v-model="course.category_id">
                <option value="" selected disabled>Seleccione una categoría</option>
                <option v-for="category in categories" :key="`category-${category.id}`" :value="category.id">
                    {{ category.name }}
                </option>
            </select>
        </div>
        <br>
        <button type="submit">Guardar</button>
    </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            course: {},
            categories: [],
            user: {}
        }
    },
    computed: {
        ...mapState(['auth'])
    },
    methods: {
        getCourse() {
            this.axios.get(`/courses/${this.$route.params.id}?included=category,user`)
                .then(response => {
                    this.course = response.data
                    this.user = response.data.user
                    if(this.user.id != this.auth.user.id) {
                        this.$router.push('/courses')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        },
        updateCourse() {
            this.axios.put(`/courses/${this.$route.params.id}`, this.course)
                 .then(() => {
                    this.$router.push({ name: 'CourseDetails', params: { id: this.$route.params.id } })
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getCategories() {
            this.axios.get('/categories')
                .then(response => {
                    this.categories = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    created() {
        this.getCourse(),
        this.getCategories()
    }
}
</script>

<style>

</style>