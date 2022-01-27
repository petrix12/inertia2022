<template>
    <h1>{{ course.title }}</h1>
    <p>{{ course.description }}</p>
	<p><b>Categoría: </b>{{ category.name }}</p>
    <p><b>Autor: </b>{{ user.name }}</p>

    <div v-if="auth && user.id == auth.user.id">
        <router-link :to="{name: 'CourseEdit', params: {id: $route.params.id}}">
            Editar curso
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            course: {},
            category: {},
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
                    this.category = response.data.category
                    this.user = response.data.user
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