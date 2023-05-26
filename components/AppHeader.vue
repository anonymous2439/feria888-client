<template>
    <div class="header_con">
        <div class="wrapper">
            <div class="header-logo">
                <div class="main-logo">
                    <nuxt-link to="/"><img src="~/assets/images/main_logo.jpg" /></nuxt-link>
                </div>
            </div>
            <div class="user-functions">
                <ul>
                    <li><nuxt-link>Login</nuxt-link></li>
                    <li><nuxt-link>Register</nuxt-link></li>
                </ul>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<style scoped>
    .header_con{position: relative;padding-top: 10px;}
    .main-logo{float: left;}
    .main-logo img{width: 100px; height: auto;}
    .user-functions{float: right;}
    .user-functions ul{display: flex;column-gap: 20px;padding-top: 40px;}
    .user-functions ul li a:hover{text-decoration: underline;}
</style>