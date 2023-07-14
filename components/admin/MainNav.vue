<template>
    
    <div class="main-nav">
        <nav class="menu">
            <div class="smartphone-menu-trigger"></div>
        <header class="avatar">
            <img src="~/assets/images/main_logo.png" />
        </header>
        <hr />
        <ul>                   
            <li><NuxtLink to="/" exact-active-class="active">Website</NuxtLink></li>
            <li><NuxtLink to="/admin" exact-active-class="active">Dashboard</NuxtLink></li>           
            <template v-if="user_info.user.user_type.name == 'admin' || user_info.user.user_type.name == 'root'">
                <li><NuxtLink to="/admin/users" exact-active-class="active">Users</NuxtLink></li>
                <li><NuxtLink to="/admin/agents" exact-active-class="active">Agents</NuxtLink></li>
            </template>
            <li><NuxtLink to="/admin/transfer" exact-active-class="active">Transfer</NuxtLink></li>
        </ul>
        </nav>    
    </div>
    <!--
    <input type="checkbox" id="check">
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
      <header>My Menu</header>
      <a href="#" class="active">
        <i class="fas fa-qrcode"></i>
        <span><NuxtLink to="/admin" exact-active-class="active">Dashboard</NuxtLink></span>
      </a>
      <a href="#">
        <i class="fas fa-link"></i>
        <span><NuxtLink to="/admin/users" exact-active-class="active">Users</NuxtLink></span>
      </a>
      <a href="#">
        <i class="fas fa-stream"></i>
        <span><NuxtLink to="/admin/agents" exact-active-class="active">Agents</NuxtLink></span>
      </a>
      <a href="#">
         <i class="fas fa-calendar"></i>
        <span><NuxtLink to="/admin/transfer" exact-active-class="active">Transfer</NuxtLink></span>
      </a>
    </div>
    -->
</template>

<script setup>
    const user_info = useCookie('user_info').value
    if(user_info.user.user_type.name == 'user'){
        window.location.replace('/403')
    }
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    }
    .sidebar{
    position: fixed;
    width: 240px;
    left: -240px;
    height: 100%;
    background: #1e1e1e;
    transition: all .5s ease;
    }
    .sidebar header{
    font-size: 28px;
    color: white;
    line-height: 70px;
    text-align: center;
    background: #1b1b1b;
    user-select: none;
    font-family: 'Montserrat', sans-serif;
    }
    .sidebar a{
    display: block;
    height: 65px;
    width: 100%;
    color: white;
    line-height: 65px;
    padding-left: 30px;
    box-sizing: border-box;
    border-bottom: 1px solid black;
    border-top: 1px solid rgba(255,255,255,.1);
    border-left: 5px solid transparent;
    font-family: 'Open Sans', sans-serif;
    transition: all .5s ease;
    }
    a.active,a:hover{
    border-left: 5px solid #b93632;
    color: #b93632;
    }
    .sidebar a i{
    font-size: 23px;
    margin-right: 16px;
    }
    .sidebar a span{
    letter-spacing: 1px;
    text-transform: uppercase;
    }
    #check{
    display: none;
    }
    label #btn,label #cancel{
    position: absolute;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    border: 1px solid #262626;
    margin: 15px 30px;
    font-size: 29px;
    background: #262626;
    height: 45px;
    width: 45px;
    text-align: center;
    line-height: 45px;
    transition: all .5s ease;
    }
    label #cancel{
    opacity: 0;
    visibility: hidden;
    }
    #check:checked ~ .sidebar{
    left: 0;
    }
    #check:checked ~ label #btn{
    margin-left: 245px;
    opacity: 0;
    visibility: hidden;
    }
    #check:checked ~ label #cancel{
    margin-left: 245px;
    opacity: 1;
    visibility: visible;
    }
    @media(max-width : 860px){
    .sidebar{
        height: auto;
        width: 70px;
        left: 0;
        margin: 100px 0;
    }
    header,#btn,#cancel{
        display: none;
    }
    span{
        position: absolute;
        margin-left: 23px;
        opacity: 0;
        visibility: hidden;
    }
    .sidebar a{
        height: 60px;
    }
    .sidebar a i{
        margin-left: -10px;
    }
    a:hover {
        width: 200px;
        background: inherit;
    }
    .sidebar a:hover span{
        opacity: 1;
        visibility: visible;
    }
    }



    .main-nav{
        height: 100%;
        width: 200px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #302e39;
        overflow-x: hidden;
        padding-top: 20px;
        text-align: center;
        box-shadow: 0 0 18px -4px #000000;
    }
    .main-nav a{
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 20px;
        color: #fff;
        display: block;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
        cursor: pointer;
        outline: none;
    } 
    .main-nav a:hover{
        background: #ebb948;
        color: #000000;
        transition: .3s;
    }
    .main-nav ul li a.active{
        color: #000000;
        font-weight: bolder;
        background: #ebb948;
    }
    .main-nav img{
        width: 120px; 
        height: auto;
        padding-bottom: 10px;
        filter: drop-shadow(0 0 0.20rem #fff);
    }
</style>