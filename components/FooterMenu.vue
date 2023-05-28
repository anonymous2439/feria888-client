<template>
    <div class="footer-menu">
            <ul>
                <li><NuxtLink>Home</NuxtLink></li>
                <li><NuxtLink>Games</NuxtLink></li>
                <li><NuxtLink>Promotion</NuxtLink></li>
                <li><NuxtLink>Member</NuxtLink></li>
                <li><NuxtLink>Service</NuxtLink></li>
            </ul>
        </div>
</template>

<style scoped>
.footer-menu { position: fixed; bottom: 0; left: 0; right: 0; background-color: #1a1a1a;box-shadow: 0 0 12px 3px #e4b536;} 
 .footer-menu ul { display: flex; justify-content: space-between; } 
 .footer-menu ul li a { text-align: center; display: block; padding: 16px 0; } 
 .footer-menu ul li { width: 20%; } 
 .footer-menu ul li a:hover { background: var(--secondary-color); } 
 .footer-menu ul li a { transition: .6s; cursor: pointer; font-weight: 600; position: relative;padding: 43px 0 16px !important;} 
 .footer-menu ul li a::before{content: url('/images/home.png');position: absolute;left: 0;right: 0;margin: 0 auto;text-align: center;pointer-events: none;top: 5px;}
 .footer-menu ul li:nth-child(2) a::before{content: url('/images/console.png');}
 .footer-menu ul li:nth-child(3) a::before{content: url('/images/gift-box.png');}
 .footer-menu ul li:nth-child(4) a::before{content: url('/images/group.png');}
 .footer-menu ul li:nth-child(5) a::before{content: url('/images/support.png');}

 @media only screen and (max-width: 600px){
    .footer-menu ul li a { font-weight: 500; font-size: 13px; } 
 }
 
</style>