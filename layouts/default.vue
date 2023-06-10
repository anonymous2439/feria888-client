<template>
    <div class="app">
        <transition name="fade">
        <div class="app-con">
            <AppHeader />        
    
            <div class="app-content">        
                <slot />
            </div>
            <AppFooter />
        </div>
        </transition>
    </div>
</template>

<script setup>
    const is_mounted = useState('is_mounted', () => false)
    onMounted(() => {
        // Your callback function here
        is_mounted.value = true
        // console.log('Component has been rendered!');
    });
</script>

<style scoped>
    .app{position: relative;}
    .app:before { content: ""; background: url('/images/hidden_treasure.jpg'); background-position-x: 0%; background-position-y: 0%; background-repeat: repeat; background-size: auto; position: fixed; top: 0; left: 0; height: 100vh; width: 100%; filter: brightness(0.6); background-repeat: no-repeat; background-size: cover; background-position-y: center; background-position-x: center; } 
    

</style>