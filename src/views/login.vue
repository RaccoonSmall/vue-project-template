<template>
    <main>
        <Button type="primary" @click="login">Login</Button>
    </main>
</template>

<script>
export default {
    data() {
        return{
        }
    },
    created() {
    },
    mounted() {
    },
    methods:{
        login() {
            this.$router.push('/page1');
        }
    },
}
</script>

<style lang="less" scoped>
    main{
        padding: 30px;
    }
</style>
