<template>
    <div class="user">
        <ul>
            <li v-for="user in users" :key="user">
                <p>
                    {{user.name}}
                   {{user.email}}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "user",
    data(){
        return {
            users: []
        }
    },
    mounted(){
        this.$api.user.listUsers()
            .then(res => {
                // console.log(res)
                this.users = res.data
            })
            .catch(err => console.error);
    }
}
</script>

<style scoped>

</style>