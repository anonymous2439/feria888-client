<template>
    <div class="main-nav">
        <ul>
            <li><img src="~/assets/images/main_logo.png" /></li> 
            <hr>     
            <li><NuxtLink to="/" exact-active-class="active">Website</NuxtLink></li>
            <li><NuxtLink to="/admin" exact-active-class="active">Dashboard</NuxtLink></li>           
            <li v-if="user_info.user.user_type.name == 'admin'"><NuxtLink to="/admin/users" exact-active-class="active">Users</NuxtLink></li>
            <li v-if="user_info.user.user_type.name == 'admin'"><NuxtLink to="/admin/agents" exact-active-class="active">Agents</NuxtLink></li>
            <li><NuxtLink to="/admin/transfer" exact-active-class="active">Transfer</NuxtLink></li>
        </ul>    
    </div>
</template>

<script setup>
    const user_info = useCookie('user_info').value
    if(user_info.user.user_type.name == 'user'){
        window.location.replace('/403')
    }
</script>

<style scoped>
    .main-nav{
        height: 100%;
        width: 200px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #302e39;
        overflow-x: hidden;
        padding-top: 20px;
        text-align: center;
        box-shadow: 0 0 18px -4px #000000;
    }
    .main-nav a{
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 20px;
        color: #fff;
        display: block;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
        cursor: pointer;
        outline: none;
    } 
    .main-nav a:hover{
        background: #ebb948;
        color: #000000;
        font-weight: bolder;
        transition: .3s;
    }
    .main-nav ul li a.active{
        color: #000000;
        font-weight: bolder;
        background: #ebb948;
    }
    .main-nav img{
        width: 120px; 
        height: auto;
        padding-bottom: 10px;
        filter: drop-shadow(0 0 0.20rem #fff);   
    }
</style>