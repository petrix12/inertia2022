<template>
    <div class="container">
        <h1>Login</h1>
        <div class="card mx-auto">
            <div class="card-body">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="email" class="mb-1">Email</label>
                        <input type="email" v-model="email" class="form-control" placeholder="Ingresa tu email">
                    </div>

                    <div class="mb-3">
                        <label for="password" class="mb-1">Password</label>
                        <input type="password" v-model="password" class="form-control" placeholder="Ingresa tu password">
                    </div>

                    <button class="btn btn-primary" :class="{ 'disabled': disabled }">Iniciar sesión</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    data() {
        return {
            email: 'bazo.pedro@gmail.com',
            password: '12345678',
            disabled: false
        }
    },
    computed: {
        ...mapState(['auth'])
    },
    methods: {
        ...mapMutations(['setAuth']),
        login() {
            this.disabled = true
            this.axios.post('/login', {
                gran_type: "password",
                client_id: "956804e5-0b1b-4fea-a567-49df94c6ce0a",
                client_secret: "4K56dLk41j1g1TVWfwbOuMrqTppwtQfWlBR9KKuF",
                username: this.email,
                password: this.password
            })
            .then(response => {
                localStorage.setItem("auth", JSON.stringify(response.data))
                this.setAuth(response.data)
                this.disabled = false
                this.$router.push({
                    name: 'Dashboard'
                })
            })
        }
    }
}
</script>

<style scoped>
    .card {
        max-width: 32rem;
    }
</style>