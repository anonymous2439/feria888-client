<template>
    <div class="game-drawer">
        <div class="wrapper">
            <div class="game-drawer-con">
                <div class="game-drawer-box">
                    <GameApp v-for="game in games" :icon="game.icon" :link="game.link">{{ game.title }}</GameApp>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
    const {data:response} = await useFetch('/api/games')
    const games = toRaw(response.value.data)
</script>

<style scoped>
    .game-drawer-con{background: #00000061;text-align: center;padding: 40px 25px;}
     .game-drawer-box{display: flex;justify-content: flex-start;column-gap: 17px;flex-wrap: wrap;}
</style>
