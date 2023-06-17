<template>
    <div class="header">
        <div class="header-info">
            <ul>
                <li>Wallet: </li>
                <li>Coins: {{ user_info_cookie.user.coins.length > 0 ? user_info_cookie.user.coins[0].coin_balance : 0 }}</li>
            </ul>
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
    console.log(user_info.user)

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
    .header {background-color: #1a1a1a; color: #fff;width: 100%;position: relative; padding: 15px 0;}
    .header-info {display: inline-block; vertical-align: top;}
    .header-info ul {display: flex; column-gap: 80px;}
    .header-nav {float: right;}
    .header::before{content: "";width: 100%;background: inherit;position: absolute;top: 0;left: -100%;height: 100%;}
    .header::after{content: "";width: 100%;background: inherit;position: absolute;top: 0;right: -100%;height: 100%;}
</style>