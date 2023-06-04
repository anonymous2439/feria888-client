<template>
    <div class="app-categories">
        <CategoryList />
    </div>
</template>

<style>
    .app-categories{background-color: var(--primary-color);padding: 10px 10px;background: rgb(228,181,54);background: linear-gradient(90deg, rgba(228,181,54,1) 23%, rgba(212,49,23,1) 100%);}
    .app-categories ul{display: flex; column-gap: 20px;flex-wrap: wrap;row-gap: 15px;}
    .app-categories ul li a{cursor: pointer;transition: .6s;font-weight: 600;font-size: 20px;display: block;color: #fff;text-decoration: none;padding: 15px;}
    .app-categories ul li a:hover, .app-categories ul li a.active{background: var(--secondary-color);}
    .app-categories ul li a::before {content: "";width: 45px;height: 45px;background-image: url(/images/all_games.png);background-size: cover;display: block;margin: 0 auto 15px;filter: invert(1);transition: .6s;}    
    .app-categories ul li:nth-child(2) a::before{background-image: url(/images/slots.png);}
    .app-categories ul li:nth-child(3) a::before{background-image: url(/images/fisher.png);}
    .app-categories ul li:nth-child(4) a::before{background-image: url(/images/sabong.png);}
    .app-categories ul li:nth-child(5) a::before{background-image: url(/images/live.png);}
    .app-categories ul li:nth-child(6) a::before{background-image: url(/images/sports.png);}
    .app-categories ul li:nth-child(7) a::before{background-image: url(/images/lotto.png);}
    .app-categories ul li:nth-child(8) a::before{background-image: url(/images/others.png);}
    .app-categories ul li a:hover::before { transform: scale(1.2); } 

    @media only screen and (max-width: 800px){
        .app-categories{display: none;}
    }
</style>