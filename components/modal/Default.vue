<template>
    <div class="modal">
        <div class="overlay"></div>
        <div class="modal_con">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.modal { position: fixed; height: 100vh; width: 100%; top: 0; left: 0; z-index: 1000; } 
.overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #1a1a1a6b; } 
.modal_con { background: #fff; position: relative; max-width: 600px; margin: 0 auto; top: 50%; transform: translateY(-50%); padding: 25px 15px; border-radius: 7px; } 
.modal-header { font-weight: 700; text-transform: uppercase; } 
</style>