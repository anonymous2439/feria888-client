<template>
    <ul>
        <li><NuxtLink to="/games" @click="() => {nav_is_active = false}">All Games</NuxtLink></li>
        <li><NuxtLink to="/games/slots" @click="() => {nav_is_active = false}">Slot Games</NuxtLink></li>
        <li><NuxtLink to="/games/fisher" @click="() => {nav_is_active = false}">Fisher Games</NuxtLink></li>
        <li><NuxtLink to="/games/sabong" @click="() => {nav_is_active = false}">Sabong</NuxtLink></li>
        <li><NuxtLink to="/games/live" @click="() => {nav_is_active = false}">Live Games</NuxtLink></li>
        <li><NuxtLink to="/games/sports" @click="() => {nav_is_active = false}">Sports</NuxtLink></li>
        <li><NuxtLink to="/games/lottery" @click="() => {nav_is_active = false}">Lottery</NuxtLink></li>
        <li><NuxtLink to="/games/other" @click="() => {nav_is_active = false}">Other Games</NuxtLink></li>
    </ul>
</template>

<script setup>
    let nav_is_active = useState('nav_is_active')
</script>