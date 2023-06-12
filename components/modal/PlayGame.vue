<template>
    <div class="play-game-modal" v-if="modal_active">
        <div class="overlay" @click="closeModal"></div>
        <div class="modal-container">
            <div class="content">
                <div class="header">
                    <h2><slot /></h2>
                </div>
                <div class="body">
                    <img :src="props.icon" />
                </div>
                <div class="footer">
                    <a :href="props.link" target="_blank" class="btn-primary">Play for Real</a>
                    <a :href="props.link" target="_blank" class="btn-secondary">Play for Fun</a>                    
                    <a @click="closeModal" class="btn-secondary outline">Cancel</a>                
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
    .modal-container {position: absolute;left: 0;right: 0;top: 0;bottom: 0;margin: 0 5%;}
    .overlay {background: #00000090;position: absolute;top: 0;left: 0;width: 100%;height: 100%;}
    .content {position: absolute;top: 50%;left: 0;right: 0;max-width: 500px;margin: 0 auto;padding: 40px 15px;background: #fff;color: #1a1a1a;border-radius: 8px;transform: translateY(-55%);}
    .body {padding: 15px 0;}
    .footer {display: flex;border-top: 1px solid #000;padding: 15px 0 0;column-gap: 12px;flex-wrap: wrap;justify-content: center;row-gap: 12px;}
    .footer a {max-width: 122px;width: 100%;}
</style>