<template>
    <a @click="logout" class="logout-btn">Logout</a>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const user_info_cookie = useCookie('user_info')
    let user_info = user_info_cookie.value

    // methods
    async function logout(){
        const { data, refresh } = await useFetch(`${runTimeConfig.public.baseURL}/api/logout`, { 
            method: 'POST',
            headers: {
                Authorization: 'Bearer '+user_info.token,
            },
        })
        const user_info_cookie = useCookie('user_info')
        user_info_cookie.value = null
        window.location.replace('/admin')
    }
    // end methods
</script>

<style scoped>
    .logout-btn{cursor: pointer;}
</style>