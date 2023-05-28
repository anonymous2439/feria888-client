<template>
    <AppBanner />
    <div class="hot-games games-catalogue">
        <h2>Hot Games</h2>
        <GameDrawer category="hot" />
    </div>
    <div class="new-games games-catalogue">
        <h2>New Games</h2>
        <GameDrawer category="hot" />
    </div>
</template>

<style scoped>
    .games-catalogue{position: relative;}
    .games-catalogue h2{text-align: center;}
</style>