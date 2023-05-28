<template>
    <div>
        <AppHeader />        

        <div class="app-content">        
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<style scoped>
    .app-content{min-height: 500px;padding: 40px 0;}
</style>