<template>
    <div class="container">
        <h1>Lista de cursos</h1>
        <ul v-if="errors.length > 0">
            <li v-for="error in errors" :key="error.id">
                {{ error }}
            </li>
        </ul>
        <div v-if="auth" class="mb-4 card">
            <form @submit.prevent="saveCourse" class="card-body">
                <div class="mb-2">
                    <label for="title">Título</label>
                    <br>
                    <input class="form-control" v-model="course.title" id="title" type="text" placeholder="Ingrese el título del curso">
                </div>
                
                <div class="mb-2">
                    <label for="description">Descripción</label>
                    <br>
                    <textarea class="form-control" v-model="course.description" id="description" type="text" placeholder="Ingrese la descripción del curso"></textarea>
                </div>
                
                <div class="mb-2">
                    <label for="categories">Categoría</label>
                    <br>
                    <select class="form-control" name="" id="categories" v-model="course.category_id">
                        <option value="" selected disabled>Seleccione una categoría</option>
                        <option v-for="category in categories" :key="`category-${category.id}`" :value="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary btn-sm">Guardar</button>
            </form>
        </div>
        <div class="mb-4">
            <h2>Buscar</h2>
            <input v-model="search" type="text" placerholder="Ingrese una palabra para filtrar" class="form-control">
        </div>
        <ul>
            <li v-for="course in courses" :key="`course-${course.id}`" class="mb-2">
                <router-link :to="{ name: 'CourseDetails', params: { id: course.id } }">
                    {{ course.title }}
                </router-link>
                -
                <button v-if="auth && course.user.id == auth.user.id" @click="deleteCourse(course.id)" class="btn btn-danger btn-sm">Eliminar</button>
            </li>
        </ul>

        <!-- paginación -->
        <div class="d-flex justify-content-center">
            <nav aria-label="...">
                <ul class="pagination">
                    <li 
                        v-for="pagination_link in pagination.links"
                        :key="'pagination_link-' + pagination_link.label"
                        class="page-item"
                        :class="{
                            'disabled': pagination_link.url == null,
                            'active': pagination_link.active
                        }"
                    >
                        <a 
                            class="page-link"
                            @click="changePage(pagination_link.url)"
                            v-html="pagination_link.label" 
                            style="cursor: pointer"
                        ></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import usePagination from '@/composables/usePagination.js'
import { mapState } from 'vuex'

export default {
    setup() {
        const {
            pagination,
            page,
            setPagination,
            changePage
        } = usePagination()

        return {
            pagination,
            page,
            setPagination,
            changePage
        }
    },
    data() {
        return {
            courses: [],
            categories: [],
            course: {
                title: '',
                description: '',
                category_id: ''
            },
            errors: [],
            search: ''
        }
    },
    computed: {
        ...mapState(['auth'])
    },
    watch: {
        page() {
           this.getCourses() 
        },
        search() {
            this.getCourses()
        }
    },
    methods: {
        getCourses() {
            this.axios.get(`/courses`, {
                params: {
                    included: 'user',
                    sort: '-id',
                    per_page: 10,
                    page: this.page,
                    'filter[title]': this.search
                }
            })
                .then(response => {
                    let res = response.data
                    this.courses = res.data

                    this.setPagination(res)
                    /* this.pagination = {
                        links: res.links,
                        last_page: res.last_page
                    } */
                    /* this.pagination_links = res.links */
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
        },
        saveCourse() {
            this.axios.post('/courses', this.course)
                 .then(() => {
                    /* this.courses.push(response.data) */
                    this.getCourses()
                    this.course = {
                        title: '',
                        description: '',
                        category_id: ''
                    }
                    this.errors = []
                })
                .catch(error => {
                    console.log(error.response.data)
                    /* this.errors = Object.values(error.response.data.errors).flat() */
                })
        },
        deleteCourse(id) {
            this.axios.delete(`/courses/${id}`)
                 .then(() => {
                    /* this.courses = this.courses.filter(course => course.id != id) */
                    this.getCourses()
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
    created() {
        this.getCourses(),
        this.getCategories()
    }
}
</script>

<style>

</style>