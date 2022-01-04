<template>
    <h1>HS++ Post ({{ $route.params.post }}) de un usuario ({{ $route.params.user }})</h1>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route.params)
    }
}
</script>

<style>

</style>