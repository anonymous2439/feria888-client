<template>
    <div class="categories-page">
        <div class="wrapper">
            <div class="categories-page-con">
                <h2 class="category-name">{{ category }}</h2>
                
                <GameDrawer :category="category"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    const route = useRoute()
    const category = route.params.id

    const games_proxy = useState('games').value
    let games = []
    if(isProxy(games_proxy)){
        games = toRaw(games_proxy)
    }

</script>

<style scoped>
    
</style>