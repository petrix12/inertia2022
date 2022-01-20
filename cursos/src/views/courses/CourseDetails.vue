<template>
    <h1>{{ course.title }}</h1>
    <p>{{ course.description }}</p>
	<p><b>Categoría: </b>{{ course.category.name }}</p>
    <router-link :to="{name: 'CourseEdit', params: {id: course.id}}">
        Editar curso
    </router-link>
</template>

<script>
export default {
    data() {
        return {
            course: {}
        }
    },
    methods: {
        getCourse() {
            this.axios.get(`https://cursos-prueba.tk/api/courses/${this.$route.params.id}?included=category`)
                .then(response => {
                    this.course = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    created() {
        this.getCourse()
    }
}
</script>

<style>

</style>