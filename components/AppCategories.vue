<template>
    <div class="app-categories">
        <CategoryList />
    </div>
</template>

<style>
    .app-categories{background-color: var(--primary-color);padding: 20px 10px;}
    .app-categories ul{display: flex; column-gap: 20px;flex-wrap: wrap;row-gap: 15px;}
    .app-categories ul li a{cursor: pointer;transition: .6s;font-weight: 600;font-size: 20px;display: block;color: #fff;text-decoration: none;}
    .app-categories ul li a:hover, .app-categories ul li a.active{color: var(--secondary-color);}

    @media only screen and (max-width: 800px){
        .app-categories{display: none;}
    }
</style>