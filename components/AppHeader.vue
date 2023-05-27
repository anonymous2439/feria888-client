<template>
    <div class="header-con">
        <div class="wrapper">
            <div class="header-logo">
                <div class="main-logo">
                    <nuxt-link to="/"><img src="~/assets/images/main_logo.jpg" /></nuxt-link>
                </div>
            </div>
            <div class="main-nav">
                <ul v-if="!is_mobile">
                    <li><nuxt-link>Login</nuxt-link></li>
                    <li><nuxt-link>Register</nuxt-link></li>
                </ul>
                <div class="hamburger_menu" @click="() => {nav_is_active = !nav_is_active}" v-show="is_mobile"></div>
            </div>
            <div class="main-nav-mobile" v-show="nav_is_active">
                <div class="main-nav-mobile-con">
                    <div class="main_nav_mobile_close" @click="() => {nav_is_active = !nav_is_active}">x</div>
                    <ul>
                        <li><nuxt-link>Login</nuxt-link></li>
                        <li><nuxt-link>Register</nuxt-link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script setup>
    const is_mobile = useState('is_mobile', () => true)
    const nav_is_active = useState('nav_is_active', () => false)
    const hamburger_menu_click = () => {
        
    }
</script>

<style scoped>
    .header-con{position: relative;padding-top: 10px;}
    .main-logo{float: left;}
    .main-logo img{width: 100px; height: auto;}
    .main-nav{float: right;}
    .main-nav ul{display: flex;column-gap: 20px;padding-top: 40px;}
    .main-nav ul li a:hover{text-decoration: underline;}

    .main-nav-mobile{z-index:1000;position: fixed;width: 100%;height: 100%;top: 0;left: 0;transition: .6s;}
    .main-nav-mobile::before{background-color: #00000051;position: absolute;top: 0;left: 0;width: 100%;height: 100%;content: "";}
    .main-nav-mobile-con{position: absolute;background-color: black;top: 0;right: 0;width: 300px;height: 100%;}

    .hamburger_menu { width: 41px; height: 2px; position: relative; z-index: 500;border-top: 2px solid #fff;border-bottom: 2px solid #fff;padding: 6px 0; cursor: pointer;} 
    .hamburger_menu::before{background-color: #fff;content: "";width: 100%;height: 2px;position: absolute;top: 50%;transform: translateY(-50%);}
    .hamburger_menu:hover{opacity: .6;}
    .main_nav_mobile_close{cursor: pointer;}

</style>