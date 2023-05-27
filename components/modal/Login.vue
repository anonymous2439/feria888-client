<template>
    <div class="login-modal">
        <div class="login-modal-con">
            <form>
                <input placeholder="Username" />
                <input placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    .login-modal { position: absolute; right: 0; top: 100%; z-index: 500; } 
  .login-modal-con { background: #fff; padding: 20px; border-radius: 5px; } 
 
</style>