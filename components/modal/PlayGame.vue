<template>
    <div class="play-game-modal" v-if="modal_active">
        <div class="overlay" @click="closeModal"></div>
        <div class="modal-container">
            <div class="content">
                <div class="">
                    <div class="">
                        <a @click="closeModal" class="close-btn"><img src="~/public/images/closebutton.png" /></a>
                    </div>
                    <div class="header-modal">
                        <h2><slot /></h2>
                    </div>
                </div>
                <div class="body">
                    <img :src="props.icon" />
                </div>
                <div class="footer">
                    <a :href="props.link" target="_blank" class="modal-btn modal-btn--practice">Practice</a>
                    <a :href="props.link" target="_blank" class="modal-btn modal-btn--play-for-real">Play for Real</a>                    
                                    
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
    }
    .content div div a img:hover{
        scale: 1.1;
    }
    .header-modal{
        border: 0px solid yellow;
        margin-top: 0px;
        padding: 15px;
    }
    .close-btn{
        float: right;
        padding-top: 5px;
        padding-right: 5px;
        font-weight: bolder;
        cursor: pointer;
        font-size: 20px;
    }
    .close-btn:hover{
        font-weight: bolder;
        cursor: pointer;
        color: #c8371a;
    }
    .body {padding: 15px 0;}
    .footer {display: flex;border-top: 0px solid #000;padding: 15px 0 15px;column-gap: 12px;row-gap: 12px;}
    .footer a {max-width: 140px;width: 100%;}

    .modal-btn {
        border: none;
        display: inline-block;
        color: #fff;
        margin:auto;
        padding: 20px 0px 0px;
        height: 40px;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        text-decoration: none;
        text-transform: uppercase;
        font-family: Helvetica;
        text-align:center;
        cursor: pointer;
        font-size: 15px;
    }
    .modal-btn:before {
        content: "";
        position: absolute;
        top: -30px;
        left: -80px;
        height: 110px;
        width: 70px;
        background: rgba(255, 255, 255, .3);
        transform: rotate(20deg);
    }
    .modal-btn:hover:before {
        left: 190px;
        transition: all .7s;
    }
    .modal-btn--practice{
        background: #ebb948;
    }
    .modal-btn--play-for-real{
        background: #c8371a;
    }
    .modal-btn--cancel{
        background: red;
    }
</style>