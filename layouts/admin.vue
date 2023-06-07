<template>
    <div class="app">
        <div class="admin-con">
            <AdminHeader />
            <AdminMainNav />
            <slot />
            
        </div>
    </div>
    
</template>

<style scoped>
    .app{background: #fff;color: #000;}
    .admin-con{position: relative; z-index: 1;}
</style>