<template>
    <div class="header">
        <div class="header-info">
            <ul>
                <li>Wallet: {{ user_info_cookie.user.wallets.length > 0 ? user_info_cookie.user.wallets[0].wallet_balance : 0 }}</li>
                <li>Coins: {{ user_info_cookie.user.coins.length > 0 ? user_info_cookie.user.coins[0].coin_balance : 0 }}</li>
            </ul>
        </div>
        <div class="header-nav">
            <a @click="logout" class="logout-btn logout-btn--logout">Logout</a>
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
    .logout-btn {
        border: none;
        display: inline-block;
        color: #fff;
        width: 100px;
        padding-top: 7px;
        height: 30px;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        text-decoration: none;
        text-transform: uppercase;
        text-align:center;
        cursor: pointer;
    }
    .logout-btn:before {
        content: "";
        position: absolute;
        top: -30px;
        left: -80px;
        height: 100px;
        width: 50px;
        background: rgba(255, 255, 255, .3);
        transform: rotate(20deg);
    }
    .logout-btn:hover:before {
        left: 210px;
        transition: all .7s;
    }
    .logout-btn--logout{
        background: #c8371a;
    }
    .header {background-color: #ebb948; color: #fff;width: 100%;position: relative;padding: 10px 0px 20px;}
    .header-info {
        display: inline-block; 
        vertical-align: top;
        font-size: 20px;
        border: 0px solid white;
    }
    .header-nav {
        float: right;
        border: 0px solid green;
    }
    .header::before{content: "";width: 100%;background: inherit;position: absolute;top: 0;left: -100%;height: 100%;}
    .header::after{content: "";width: 100%;background: inherit;position: absolute;top: 0;right: -100%;height: 100%;}
</style>