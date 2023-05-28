<template>
    <ul>
        <li><NuxtLink to="/games" exact-active-class="active" @click="() => {nav_is_active = false}">All Games</NuxtLink></li>
        <li><NuxtLink to="/games/slots" exact-active-class="active" @click="() => {nav_is_active = false}">Slot Games</NuxtLink></li>
        <li><NuxtLink to="/games/fisher" exact-active-class="active" @click="() => {nav_is_active = false}">Fisher Games</NuxtLink></li>
        <li><NuxtLink to="/games/sabong" exact-active-class="active" @click="() => {nav_is_active = false}">Sabong</NuxtLink></li>
        <li><NuxtLink to="/games/live" exact-active-class="active" @click="() => {nav_is_active = false}">Live Games</NuxtLink></li>
        <li><NuxtLink to="/games/sports" exact-active-class="active" @click="() => {nav_is_active = false}">Sports</NuxtLink></li>
        <li><NuxtLink to="/games/lottery" exact-active-class="active" @click="() => {nav_is_active = false}">Lottery</NuxtLink></li>
        <li><NuxtLink to="/games/other" exact-active-class="active" @click="() => {nav_is_active = false}">Other Games</NuxtLink></li>
    </ul>
</template>

<script setup>
    let nav_is_active = useState('nav_is_active')
</script>

<style scoped>

    .main-nav-mobile ul { padding: 25px 15px; } 
    .main-nav-mobile ul li a { color: #fff; text-decoration: none; display: block; text-align: center; border: 1px solid #fff; padding: 15px 0; } 
    .main-nav-mobile ul li a:hover, .main-nav-mobile ul li a.active { background: var(--primary-color); } 
    .main-nav-mobile ul li a { transition: .6s; } 

</style>