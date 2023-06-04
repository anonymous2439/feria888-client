<template>
    <div class="admin-con">
        <AdminHeader />
        <slot />
        <AdminMainNav />
    </div>
</template>

<style>
    body, html{background: #fff;color: #000;}
    body::before{
        background: none;
    }
    .admin-con{position: relative; z-index: 1;}
</style>