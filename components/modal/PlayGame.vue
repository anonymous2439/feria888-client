<template>
    <div class="play-game-modal" v-if="modal_active">
        <div class="overlay" @click="closeModal"></div>
        <div class="modal-container">
            <div class="content">
                <div class="">
                    <div class="">
                        <a @click="closeModal"><img src="/images/closebutton.png" /></a>
                    </div>
                    <div class="header-modal">
                        <h2><slot /></h2>
                    </div>
                </div>
                <div class="body">
                    <img :src="props.icon" />
                </div>
                <div class="footer">
                    <a :href="props.link" target="_blank" class="btn-input btn-input--demo">Demo</a>
                    <a :href="props.link" target="_blank" class="btn-input btn-input--play-for-real">Play for Real</a>                    
                                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        modal_active: Boolean,
        icon: String,
        link: String,
        activeModal: Function,
    })

    const closeModal = () => {
        props.activeModal(false)
    };
</script>

<style scoped>
    .play-game-modal {width: 100%;position: fixed;top: 0;left: 0;z-index: 1;height: 100vh;}
    .modal-container {position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: 0; border: 0px solid #c8371a;}
    .overlay {background: #00000090;position: absolute;top: 0;left: 0;width: 100%;height: 100%; border: 0px solid blue;}
    .content {border:0px solid green;position: absolute;top: 50%;left: 0;right: 0;max-width: 500px;margin: 0 auto;padding: 15px 15px;background: #fff;color: #1a1a1a;border-radius: 5px;transform: translateY(-55%);}
    .content div div a img{
        height: 30px;
        float: right;
        transition: width .3s, height .3s, transform .3s;
    }
    .content div div a img:hover{
        transform: rotate(90deg);
        cursor: pointer;
        scale: 1.1;
        transition: .3s;
    }
    .header-modal{
        border: 0px solid yellow;
        margin-top: 0px;
        padding: 15px;
    }
    
    .body {
        padding: 15px 0;
    }
    .footer {
        display: flex;
        border-top: 0px solid #000;
        padding: 15px 0 15px;
        column-gap: 12px;
        row-gap: 12px;
    }
    .footer a {
        max-width: 140px;
        width: 100%;
        margin: 0 auto;
    }

    
</style>