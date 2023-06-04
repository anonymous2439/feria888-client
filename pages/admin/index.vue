<template>
    <div class="dashboard-page">
        
        <h2 class="page-title">Dashboard</h2>
        
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "admin",
    });
    const cookie = useCookie('user_info')
    if(!cookie.value)
        await navigateTo({ path: '/admin/login' })
</script>

<style scoped>
    
</style>