<template>
    
    <div id="header">
        <div class="wrapper">
            <div class="header-con">
                <div class="header-logo">
                    <div class="main-logo">
                        <nuxt-link to="/"><img src="~/assets/images/main_logo.png" /></nuxt-link>
                    </div>           
                </div>
                
                <div class="main-nav-mobile" v-show="nav_is_active">
                    <div class="main-nav-mobile-con">
                        <div class="nav-mobile-header">
                            <div class="nav-mobile-main-logo">
                                <nuxt-link to="/"><img src="~/assets/images/main_logo.png" /></nuxt-link>
                            </div>  
                            <div class="main_nav_mobile_close" @click="() => {nav_is_active = !nav_is_active}"><i class="fa-solid fa-xmark"></i></div>
                            <div class="clearfix"></div>
                        </div>
                        
                        <CategoryList />
                    </div>
                </div>
                <div class="hamburger-menu" @click="() => {nav_is_active = !nav_is_active}"></div>
                <div class="main-nav">
                    
                    <ul v-if="!user_info">
                        <li>
                            <nuxt-link @click="() => {login_is_active = !login_is_active}" 
                                class="flash-slide flash-slide--login">
                                <img src="~/public/images/user.png" id="img-login">
                                Login</nuxt-link>
                            <ModalLogin v-show="login_is_active" />
                        </li>
                        <li>
                            <nuxt-link @click="() => {register_is_active = !register_is_active}" 
                                class="flash-slide flash-slide--register">Register</nuxt-link>
                            <ModalRegister v-show="register_is_active" />
                        </li>
                    </ul>
                    <ul v-else class="user-functions">
                        <li >
                            <nuxt-link to="/profile">Profile</nuxt-link>
                        </li>
                        <li v-if="user_info.user.type_id == 2">
                            <nuxt-link to="/admin">Admin Panel</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link @click="logout">Logout</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="clearfix"></div>                
            </div>
        </div>
        <AppCategories />        
    </div>

    
</template>

<script setup>
    import { onMounted } from 'vue';
    const runTimeConfig = useRuntimeConfig()
    const login_is_active = useState('login_is_active')
    const register_is_active = useState('register_is_active')
    const nav_is_active = useState('nav_is_active', () => false)

    const user_info_cookie = useCookie('user_info')
    const user_info = user_info_cookie.value
    
    async function logout(){
        const { data, refresh } = await useFetch(`${runTimeConfig.public.baseURL}/api/logout`, { 
            method: 'POST',
            headers: {
                Authorization: 'Bearer '+user_info.token,
            },
        })
        const user_info_cookie = useCookie('user_info')
        user_info_cookie.value = null
        window.location.replace('/')
    }

</script>

<style scoped>
    #header{position: relative;}
    .header-con{position: relative;padding: 10px 10px;border: 0px solid white;background-color: aliceblue;}
    .main-logo{float: left; border:0px solid green; height:80px;}
    .main-logo img{width: 80px; height: auto;}
    .main-nav{float: right;border:0px solid blue; margin-top:17px;}
    .main-nav ul{display: flex;column-gap: 10px;padding-top: 0px;}
    .main-nav ul li { position: relative; cursor: pointer;} 
    ul.user-functions a {
        margin: top 3px;
        color: #302e39;
        font-size: 18px;
        text-decoration: none; 
        border: 0px solid green;
    }
    ul.user-functions li a:hover::before { 
        animation: forwards; 
        width: 100%; 
    } 
    ul.user-functions li a::before { 
        display: block; 
        transition: .3s; 
        background: var(--primary-color); 
        content: ""; 
        height: 4px; 
        width: 0; 
        position: absolute; 
        left: 0; 
        bottom: -5px; 
        right: 0; 
        margin: 0 auto; 
    } 
 


    .nav-mobile-header {border-bottom: 1px solid #ffffff56;padding-bottom: 10px;}
    .main-nav-mobile{z-index:1000;position: fixed;width: 100%;height: 100vh;top: 0;left: 0;transition: .6s;}
    .main-nav-mobile::before{background-color: #00000051;position: absolute;top: 0;left: 0;width: 100%;height: 100%;content: "";}
    .main-nav-mobile-con{position: absolute;background-color: #302e39;top: 0;right: 0;width: 200px;height: 100%;box-shadow: 0 0 18px -4px #e4b53679;}
    .main-nav-mobile-con ul li {margin-bottom: 5px;}
    .nav-mobile-main-logo {float: left;width: 15%;padding: 10px 0 0 10px;}

    .hamburger-menu { width: 41px; height: 2px; position: relative; z-index: 500;border-top: 2px solid #000000;border-bottom: 2px solid #000000;padding: 6px 0; cursor: pointer;display: none;float: right;top: 30px;} 
    .hamburger-menu::before{background-color: #000000;content: "";width: 100%;height: 2px;position: absolute;top: 50%;transform: translateY(-50%);left: 0;right: 0;}
    .hamburger-menu:hover{opacity: .6;}
    .main_nav_mobile_close{cursor: pointer;float: right;padding: 0px 15px;font-size: 44px;}

    #img-login {
        float: none;
        height: 15px;
        width: 15px;
        padding-top: 0px;;
    }
    .flash-slide {
        border: none;
        display: inline-block;
        color: #fff;
        margin-top: 0px;
        padding: 13px 0px 0px;
        width: 110px;
        height: 30px;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        text-decoration: none;
        text-transform: uppercase;
        font-family: Helvetica;
        text-align:center;
        cursor: pointer;
    }
    .flash-slide:before {
        content: "";
        position: absolute;
        top: -30px;
        left: -80px;
        height: 100px;
        width: 70px;
        background: rgba(255, 255, 255, .3);
        transform: rotate(20deg);
    }
    .flash-slide:hover:before {
        left: 190px;
        transition: all .7s;
    }
    .flash-slide--login{
        background: #ebb948;
    }
    .flash-slide--register{
        background: #c8371a;
    }

    @media only screen and (max-width: 1000px) {

    }
    @media only screen and (max-width: 800px) {
        .hamburger-menu{display: block;}
        .main-nav { float: none; clear: both; } 
        .main-nav ul { justify-content: center; } 
    }
</style>