<template>
    <div class="login-modal">
        <div class="login-modal-overlay modal-overlay" @click="() => {login_is_active = false}"></div>
        <div class="login-modal-con">
            
            <form>
                <input placeholder="Username" />
                <input placeholder="Password" />
                <button>Login</button>

            </form>
        </div>
    </div>
</template>

<script setup>
    const login_is_active = useState('login_is_active', () => false)
</script>

<style scoped>
    .login-modal { position: absolute; right: 0; top: 100%; z-index: 500; } 
  .login-modal-con { background: #fff; padding: 20px; border-radius: 5px;position: relative; cursor: default;} 
  .login-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0000001F; cursor: auto; } 

  @media only screen and (max-width: 800px){
    .login-modal { position: fixed; top: 0; width: 100%; height: 100%; } 
    .login-modal-con { position: absolute; left: 0; right: 0; margin: 0 4%; top: 31%; transform: translateY(-50%); max-width: 410px; margin: 0 auto; } 
 
    .login-modal-con form { display: flex; flex-direction: column; } 
  }
</style>