<template>
    <div class="app">
        <AppHeader />        

        <div class="app-content">        
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<style scoped>
    .app{position: relative;}
    .app:before { content: ""; background: url('/images/hidden_treasure.jpg'); background-position-x: 0%; background-position-y: 0%; background-repeat: repeat; background-size: auto; position: fixed; top: 0; left: 0; height: 100vh; width: 100%; filter: brightness(0.6); background-repeat: no-repeat; background-size: cover; background-position-y: center; background-position-x: center; } 
</style>