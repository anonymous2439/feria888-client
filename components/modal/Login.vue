<template>
    <div class="login-modal">
        <div class="login-modal-overlay modal-overlay" @click="() => {login_is_active = false}"></div>
        <div class="login-modal-con">
            
                <input v-model="formData.email" placeholder="Email" type="email" />
                <input v-model="formData.password" placeholder="Password" type="password" />
                <button @click="submitForm">Login</button>

        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const login_is_active = useState('login_is_active', () => false);

    let formData = {
        'email': 'user@email.com',
        'password': 'user',
    }
    
    async function submitForm() {
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/login`, {
        // const response = await $fetch('https://feria888.com/api/api/login', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        const cookie = useCookie('user_info')
        cookie.value = response.value
        window.location.reload(true)
    }
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