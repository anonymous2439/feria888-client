<template>
    
    <div id="header">
        <div class="wrapper">
            <div class="header-con">
                <div class="header-logo">
                    <div class="main-logo">
                        <nuxt-link to="/"><img src="~/assets/images/main_logo.jpg" /></nuxt-link>
                    </div>           
                </div>
                
                <div class="main-nav-mobile" v-show="nav_is_active">
                    <div class="main-nav-mobile-con">
                        <div class="main_nav_mobile_close" @click="() => {nav_is_active = !nav_is_active}">x</div>
                        <CategoryList />
                    </div>
                </div>
                <div class="hamburger-menu" @click="() => {nav_is_active = !nav_is_active}"></div>
                <div class="main-nav">
                    
                    <ul>
                        <li v-if="!user_info">
                            <nuxt-link @click="() => {login_is_active = !login_is_active}" 
                                class="flash-slide flash-slide--login">Login</nuxt-link>
                            <ModalLogin v-show="login_is_active" />
                        </li>
                        <li v-if="!user_info">
                            <nuxt-link @click="() => {register_is_active = !register_is_active}"
                                class="flash-slide flash-slide--register">Register</nuxt-link>
                            <ModalRegister v-show="register_is_active" />
                        </li>
                        <li v-if="user_info">
                            <nuxt-link to="/profile">Profile</nuxt-link>
                        </li>
                        <li v-if="user_info && user_info.user.type_id == 2">
                            <nuxt-link to="/admin">Admin Panel</nuxt-link>
                        </li>
                        <li v-if="user_info">
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
    .header-con{position: relative;padding-top: 10px;}
    .main-logo{float: left;}
    .main-logo img{width: 100px; height: auto;}
    .main-nav{float: right;}
    .main-nav ul{display: flex;column-gap: 20px;padding-top: 40px;}
    .main-nav ul li { position: relative; cursor: pointer;} 
    .main-nav ul li a:hover{text-decoration: none;}

    .main-nav-mobile{z-index:1000;position: fixed;width: 100%;height: 100%;top: 0;left: 0;transition: .6s;}
    .main-nav-mobile::before{background-color: #00000051;position: absolute;top: 0;left: 0;width: 100%;height: 100%;content: "";}
    .main-nav-mobile-con{position: absolute;background-color: black;top: 0;right: 0;width: 300px;height: 100%;box-shadow: 0 0 18px -4px #e4b53679;}


    .hamburger-menu { width: 41px; height: 2px; position: relative; z-index: 500;border-top: 2px solid #fff;border-bottom: 2px solid #fff;padding: 6px 0; cursor: pointer;display: none;float: right;top: 30px;} 
    .hamburger-menu::before{background-color: #fff;content: "";width: 100%;height: 2px;position: absolute;top: 50%;transform: translateY(-50%);left: 0;right: 0;}
    .hamburger-menu:hover{opacity: .6;}
    .main_nav_mobile_close{cursor: pointer;}

    
    @media only screen and (max-width: 1000px) {

    }
    @media only screen and (max-width: 800px) {
        .hamburger-menu{display: block;}
        .main-nav { float: none; clear: both; } 
        .main-nav ul { justify-content: center; } 
    }

.flash-slide {
  border: none;
  display: inline-block;
  color: #fff;
  margin: 0px;
  width: 110px;
  height: 30px;
  border-radius: 5px;
  position: relative;
  padding-top: 15px;
  padding-bottom: 0px;
  overflow: hidden;
  text-decoration: none;
  text-transform: uppercase;
  font-family: Helvetica;
  cursor: pointer;
  text-align:center;
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
</style>