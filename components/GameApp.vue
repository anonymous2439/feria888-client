<template>

    <div class="game-app">
        <a :href="link">
            <figure><img :src="icon"/></figure>
            <p>
                <slot></slot>
            </p>
        </a>
    </div>

</template>


<script setup>
    const props = defineProps({
        icon: String,
        link: String,
    })
</script>

<style scoped>
    .game-app{max-width: 100%;width: calc((100% - 120px)/8);position: relative;margin-bottom: 25px;}
    .game-app h4{text-align: center;}
    .game-app p { color: #fff; text-overflow: ellipsis;width: 100%;max-width: 100%;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;} 
    .game-app a { text-decoration: none;transition: .6s; } 
    .game-app a:hover { opacity: .5; } 

    @media only screen and (max-width: 1200px) {
        .game-app { width: calc((100% - 85px)/6); } 
    }
    @media only screen and (max-width: 1000px) {
        .game-app {width: calc((100% - 51px)/4);}
    }
    @media only screen and (max-width: 600px) {
        .game-app {width: calc((100% - 17px)/2);}
    }
</style>
