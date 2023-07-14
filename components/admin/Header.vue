<template>
    <div class="header">
        <div class="header-info">
            <ul>
                <li>Wallet: {{ user_info_cookie?.user?.wallets?.length > 0 ? user_info_cookie?.user?.wallets[0]?.wallet_balance : 0 }}</li>
                <li>Coins: {{ user_info_cookie?.user?.coins?.length > 0 ? user_info_cookie?.user?.coins[0]?.coin_balance : 0 }}</li>
            </ul>
        </div>
        <div class="header-nav">
            <a @click="logout" class="btn-input btn-input--logout">
                <i class="fa fa-sign-out"></i> Logout</a>
        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const user_info_cookie = useCookie('user_info')
    let user_info = user_info_cookie.value

    const { data, refresh } = await useFetch(`${runTimeConfig.public.baseURL}/api/user/get`, { 
        method: 'GET',
        headers: {
            Authorization: 'Bearer '+user_info.token,
        },
    })
    user_info_cookie.value.user = data.value

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
    
    .header {
        background-color: #ebb948; 
        color: #fff;
        width: 100%;
        position: relative;
        padding: 10px 0px 20px;
    }
    .header-info {
        display: inline-block; 
        vertical-align: top;
        font-size: 20px;
    }
    .header-nav {
        float: right;
    }
    .header::before{
        content: "";
        width: 100%;
        background: 
        inherit;
        position: absolute;
        top: 0;
        left: -100%;
        height: 100%;
    }
    .header::after{
        content: "";
        width: 100%;
        background: inherit;
        position: absolute;
        top: 0;
        right: -100%;
        height: 100%;
    }
</style>