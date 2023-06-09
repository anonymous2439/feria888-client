<template>
    <div class="header">
        <div class="header-info">
            Logged in as: 
        </div>
        <div class="header-nav">
            <a @click="logout" class="logout-btn">Logout</a>
        </div>
    </div>
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
    .header {background-color: #1a1a1a; color: #fff;width: 100%;position: relative;}
    .header-info {display: inline-block; vertical-align: top;}
    .header-nav {float: right;}
    .header::before{content: "";width: 100%;background: inherit;position: absolute;top: 0;left: -100%;height: 100%;}
    .header::after{content: "";width: 100%;background: inherit;position: absolute;top: 0;right: -100%;height: 100%;}
</style>