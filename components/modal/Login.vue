<template>
    <div class="login-modal">
        <div class="login-modal-overlay modal-overlay" @click="() => {login_is_active = false}"></div>
        <div class="login-modal-con">
            
                <form @submit.prevent="submitForm">
                    <input v-model="formData.username" placeholder="Username" type="text" />
                    <input v-model="formData.password" placeholder="Password" type="password" />
                    <button @click="submitForm">Login</button>                
                    <div v-if="is_loading" style="color:#1a1a1a">
                        <img src="~/assets/images/loader.gif" />
                    </div>                
                    <p v-else class="error_message">{{ login_message }}</p>
                </form>

        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const login_is_active = useState('login_is_active', () => false)
    const cookie = useCookie('user_info')
    const login_message = useState('login_message', () => '')
    const is_loading = useState('is_loading', () => false)

    let formData = {
        'username': '',
        'password': '',
    }
    
    function submitForm() {
        useFetch(`${runTimeConfig.public.baseURL}/api/login`, {
        // const response = await $fetch('https://feria888.com/api/api/login', {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(({data:response}) => {
            if(response.value){                        
                login_message.value = response.value.message
                if(response.value.success == 1){
                    cookie.value = response.value
                    window.location.reload(true)
                }
            }
            else
                console.log("An error occured while trying to login")
            is_loading.value = false
        })
        is_loading.value = true
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