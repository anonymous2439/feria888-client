<template>
    <div class="app">
        <div class="admin-con">
            <div class="content">
                <AdminHeader />
                <slot />
                <div v-if="content_is_loading" class="content-loader">
                    <img src="~/assets/images/loader.gif" />
                </div>
            </div>
            <AdminMainNav />
        </div>
    </div>
</template>

<script setup>
    const cookie = useCookie('user_info')
    if(!cookie.value)
        window.location.replace('/admin/login')
    else if(cookie.value?.user?.user_type?.name != 'admin')
        window.location.replace('/')
    const content_is_loading = useState('content_is_loading', () => false)
</script>

<style scoped>
    .app{background: #fff;color: #000;}
    .admin-con{position: relative; z-index: 1;}
    .content {margin: 0 50px 40px 230px; position: relative;}
    .content-loader {position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);width: 100px;}
</style>