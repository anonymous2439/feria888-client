<template>
    <div class="game-drawer">
        <div class="wrapper">
            <div class="game-drawer-con">
                <h2>
                    <nuxt-link @click="" class="title-hover-underline-animation">{{ title }}</nuxt-link>
                </h2>
                <div class="game-drawer-box" v-if="games.length > 0">                    
                    <GameApp 
                        v-for="(game, i) in games"
                        :key="i" 
                        :icon="game.icon" 
                        :link="game.link">
                            {{ game.title }}
                    </GameApp>                    
                </div>
                <div v-else class="no-games">
                    Come back for more exciting games...
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
    import games_data from '~/assets/data/games.json';
    const props = defineProps({
        category: String,
        title: String,
    })

    // const {data:response} = await useFetch('/api/games')
    // const games_data = toRaw(response.value.data)
    const games_state = useState('games', () => [])
    games_state.value = games_data

    let games = []
    games_data.forEach(function(game){
        if(!props.category || game.tags.includes(props.category))
            games.push(game)
    })
    
</script>

<style scoped>    
    .game-drawer-con{background: #ffffff;text-align: center;padding: 40px 25px;border:0px solid brown; margin: 5px 10px 0px; border-radius: 5px; filter: drop-shadow(0 0 0.20rem #000000);}
    .game-drawer-con h2 {text-align: left;margin-bottom: 28px;text-decoration: none; text-transform: uppercase;}
     .game-drawer-box{display: flex;justify-content: flex-start;column-gap: 17px;flex-wrap: wrap;}
     .no-games{
        color: #000000;
     }

     
     @media only screen and (max-width: 1000px) {
        .game-drawer { border-bottom: 1px solid #ffffff1a; padding-bottom: 40px;} 
    }
</style>
