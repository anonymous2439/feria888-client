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
        <li>
            <div class="box">
                <form name="search">
                    <input type="text" placeholder="Search a Game" class="input" name="txt" onmouseout="this.value = ''; this.blur();">
                </form>
                <i class="fas fa-search"></i>
            </div>
        </li>
    </ul>
</template>

<script setup>
    let nav_is_active = useState('nav_is_active')
</script>

<style scoped>
    /*Mobile right menu*/ 
    .main-nav-mobile ul { padding: 25px 15px; } 
    .main-nav-mobile ul li a { color: #fff; text-decoration: none; display: block; text-align: left; border-bottom: 1px solid #fff; padding: 15px 10px; } 
    .main-nav-mobile ul li a:hover, .main-nav-mobile ul li a.active { background: var(--primary-color); color: #000000;font-weight: bolder;} 
    .main-nav-mobile ul li a { transition: .3s; }
    
    
    .box{
    position: relative;
    margin-top: 15px;
    margin-left: 15px;
    }

    .input {
        padding: 10px;
        width: 80px;
        height: 80px;
        background: none;
        border: 1px solid #c8371a;
        border-radius: 50px;
        box-sizing: border-box;
        font-size: 26px;
        color: #fff;
        outline: none;
        transition: .5s;
    }
    input::placeholder {
         color: transparent;
    }
    input:focus::placeholder {
         color: #ffffff60;
    }
    .box:hover input{
        width: 300px;
        max-width: 100%;
        background: #3b3946;
        border-radius: 10px;
        padding: 0px 15px;
    }
    .box i{
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translate(-50%,-50%);
        font-size: 26px;
        color: #ffd52d;
        transition: .2s;
    }
    .box i{
        color: #3a3845;
    }
    .box:hover i{
        opacity: 0;
        z-index: -1;
    }
    
    @media only screen and (max-width: 1000px) {
        .input{
            border: none;
            font-size: 16px;
        }
        .box i{
        color: #fff;
        } 
        .box:hover input{
            border: 1px solid white;
        }
    }
    @media only screen and (max-width: 800px) {
        .input{
            border: none;
            font-size: 16px;
        }
        .box i{
        color: #fff;
        } 
        .box:hover input{
            border: 1px solid white;
        }
    }
</style>