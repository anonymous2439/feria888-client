<template>
    <div class="footer-menu">
            <ul>
                <li><NuxtLink exact-active-class="active" to="/">HOME</NuxtLink></li>
                <li><NuxtLink exact-active-class="active" to="/games">GAMES</NuxtLink></li>
                <li><NuxtLink exact-active-class="active" to="/profile">PROFILE</NuxtLink></li>
                <li><NuxtLink exact-active-class="active" to="">PANEL</NuxtLink></li>
                <li><NuxtLink exact-active-class="active" to="">LOGOUT</NuxtLink></li>
            </ul>
        </div>
</template>

<style scoped>
.footer-menu { 
    position: fixed; 
    bottom: 0; 
    left: 0; 
    right: 0; 
    background-color: #302e39;
    box-shadow: 0 0 5px 1px #00000050;
    display: none;
} 
 .footer-menu ul { 
    display: flex; 
    justify-content: space-between; 
} 
 .footer-menu ul li a { 
    text-align: center; 
    display: block; 
    padding: 0px;
    border: 0px solid green; 
} 
 .footer-menu ul li { 
    width: 20%;
} 
 .footer-menu ul li a:hover, .footer-menu ul li a.active { 
    background: var(--secondary-color); 
} 
 .footer-menu ul li a { 
    transition: .6s; 
    cursor: pointer; 
    font-weight: 600; 
    position: relative;
    padding: 43px 0 15px !important;
    text-decoration: none;
    color: var(--primary-color);
} 
 .footer-menu ul li a::before{
    content: url('/images/home.png');
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    pointer-events: none;
    top: 10px;
}
 .footer-menu ul li:nth-child(2) a::before{
    content: url('/images/controller.png');
    top: 11px;
}
 .footer-menu ul li:nth-child(3) a::before{
    content: url('/images/profile.png');
}
 .footer-menu ul li:nth-child(4) a::before{
    content: url('/images/panel.png');
}
 .footer-menu ul li:nth-child(5) a::before{
    content: url('/images/power.png');
}

 @media only screen and (max-width: 800px){
    .footer-menu{
        display: block;
    }
    .main-nav{
        display: none;
    }
 }

 @media only screen and (max-width: 600px){
    .footer-menu ul li a { 
        font-weight: 500; 
        font-size: 13px; 
        display: block;
    } 
    .main-nav{
        display: none;
    }
 }
 
</style>