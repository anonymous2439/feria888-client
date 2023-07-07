<template>
    <div class="footer-menu">
            <ul>
                <li><NuxtLink exact-active-class="active" to="/">Home</NuxtLink></li>
                <li><NuxtLink exact-active-class="active" to="/games">Games</NuxtLink></li>
                <li><NuxtLink exact-active-class="active" to="/promotion">Promotion</NuxtLink></li>
                <li><NuxtLink exact-active-class="active" to="/member">Member</NuxtLink></li>
                <li><NuxtLink exact-active-class="active" to="/service">Service</NuxtLink></li>
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
    content: url('/images/console.png');
}
 .footer-menu ul li:nth-child(3) a::before{
    content: url('/images/gift-box.png');
}
 .footer-menu ul li:nth-child(4) a::before{
    content: url('/images/group.png');
}
 .footer-menu ul li:nth-child(5) a::before{
    content: url('/images/support.png');
}

 @media only screen and (max-width: 800px){
    .footer-menu{
        display: block;
    }
 }

 @media only screen and (max-width: 600px){
    .footer-menu ul li a { 
        font-weight: 500; 
        font-size: 13px; 
        display: block;
    } 
 }
 
</style>