<template>
    <AppBanner />
    <div class="hot-games games-catalogue">
        <GameDrawer category="hot" title="Hot Games" />
    </div>
    <div class="new-games games-catalogue">
        <GameDrawer category="hot" title="New Games" />
    </div>
</template>

<style scoped>
    .games-catalogue{position: relative; margin-bottom: 25px;}
</style>