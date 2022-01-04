<template>
    <div v-if="$route.params.userId">
        <h1>HS++: Detalle del usuario con id = {{ userId }}</h1>
    </div>
    <div v-else>
        <h1>HS++: Lista de usuarios</h1>
    </div>

    <div id="nav">
        <router-link :to="{name: 'UsersIndex', params: {userId}}">Index</router-link> |
        <router-link :to="{name: 'UsersProfile', params: {userId}}">Perfil</router-link> |
        <router-link :to="{name: 'UsersCourses', params: {userId}}">Cursos</router-link>
    </div>

    <router-view/>
</template>

<script>
export default {
    props: ['userId'],
}
</script>

<style>

</style>