<template>

    <div class="game-app">
        <div class="game-app-con">
            <div class="game-app-overlay"></div>
            <figure>
                <img :src="icon"/>
                <template v-if="user_info">
                    <div class="game-app-links">
                        <a @click="playClick" class="btn-primary">Play</a>
                    </div>
                    <div class="link-mobile" @click="playClick"></div>
                </template>
                <template v-else>
                    <div class="game-app-links">
                        <a @click="playClick" class="btn-primary">Login <br />or <br /> Register</a>
                    </div>
                    <a class="link-mobile" @click="playClick"></a>
                </template>
            </figure>            
        </div>
        <ModalPlayGame :modal_active="play_active" :icon="props.icon" :link="props.link" :activeModal="modalCallback">
            <slot />
        </ModalPlayGame>
    </div>    

</template>


<script setup>

    const user_info = useCookie('user_info')
    const props = defineProps({
        icon: String,
        link: String,
    })

    const play_active = ref(false)

    function playClick() {
        play_active.value = true
    }

    function modalCallback(event) {
        play_active.value = event
    }

</script>

<style scoped>

    .game-app{max-width: 100%;width: calc((100% - 68px)/5);position: relative; margin-bottom: 10px;}
    .game-app h4{text-align: center;}
    .game-app p { color: #fff; text-overflow: ellipsis;width: 100%;max-width: 100%;overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;} 
    .game-app-con { text-decoration: none;transition: .6s;position: relative;border: 0px solid red; filter: drop-shadow(0 0 0.20rem #000000);} 
    .game-app-con:hover .game-app-overlay {opacity: 1; border-radius: 5px;}
    .game-app-con:hover .game-app-links {opacity: 1;}
    .game-app-overlay { background: #0000007D;width: 100%;height: 100%;position: absolute; top: 0;left: 0; opacity: 0; transition: .6s;}
    .game-app-links {position: absolute;left: 0;right: 0;top: 50%;transform: translateY(-50%); opacity: 0;padding: 0 10px; transition: .6s; border: 0px solid black;}
    .link-mobile {position: absolute;top: 0;left: 0;width: 100%;height: 100%;cursor: pointer; display: none;}
    .game-app-con a{max-width: 120px;}

    

    @media only screen and (max-width: 1200px) {
        .game-app { width: calc((100% - 85px)/6); } 
    }
    @media only screen and (max-width: 1000px) {
        .game-app {width: calc((100% - 51px)/4);}
        .game-app-links {display: none;}
        .link-mobile {display: block;}
    }
    @media only screen and (max-width: 600px) {
        .game-app {
            width: calc((100% - 17px)/2);
        }
    }
</style>
