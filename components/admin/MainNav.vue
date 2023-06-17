<template>
    <div class="main-nav">
        <ul>
            <li><NuxtLink to="/" exact-active-class="active">Website</NuxtLink></li>
            <li><NuxtLink to="/admin" exact-active-class="active">Dashboard</NuxtLink></li>            
            <li><NuxtLink to="/admin/users" exact-active-class="active">Users</NuxtLink></li>
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
    .main-nav {position: fixed;background: #000;color: #fff;height: 100%;width: 200px;top: 0;left: 0;}
    .main-nav ul{}
    .main-nav ul li{}
    .main-nav ul li a{}
</style>