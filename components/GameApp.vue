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
    .game-app p { color: #fff; } 
    .game-app a { text-decoration: none;transition: .6s; } 
    .game-app a:hover { opacity: .5; } 
</style>
