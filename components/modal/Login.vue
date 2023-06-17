<template>
    <div class="login-modal">
        <div class="login-modal-overlay modal-overlay" @click="() => {login_is_active = false}"></div>
        <div class="login-modal-con">
            
                <form @submit.prevent="submitForm">
                    <input v-model="formData.username" placeholder="Username" type="text" />
                    <input v-model="formData.password" placeholder="Password" type="password" />
                    <button @click="submitForm" class="btn-input btn-input--login">Login</button>                
                    <div v-if="is_loading" style="color:#1a1a1a">
                        <img src="~/assets/images/loader.gif" />
                        <!-- <LoaderCardShuffle /> -->
                    </div>                
                    <p v-else class="error_message">{{ login_message }}</p>
                </form>
                <hr>
                  <div>
                    Forgot&nbsp;<nuxt-link @click="() => {register_is_active = !register_is_active}" 
                    class="hover-underline-animation"> Password?</nuxt-link>  
                  </div>               
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
    .login-modal { position: absolute; right: 0; top: 100%; z-index: 500; border: 0;} 
  .login-modal-con { background: #fff; color:#000000; padding: 20px; border-radius: 5px;position: relative; cursor: default;
    height: auto;
    width: auto;
    }
    input[type=text], input[type=password] {
        width: 200px;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 1px solid #c8371a;
        border-radius: 4px;
    }
    input[type=text]:focus, input[type=password]:focus{
        outline: 2px solid #ebb948;
    }
    .btn-input {
        border: none;
        display: inline-block;
        color: #fff;
        margin-top: 8px;
        padding-top: 13px 0px;
        width: 200px;
        height: 40px;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        text-decoration: none;
        text-transform: uppercase;
        font-family: Helvetica;
        text-align:center;
        cursor: pointer;
    }
    .btn-input:before {
        content: "";
        position: absolute;
        top: -30px;
        left: -80px;
        height: 100px;
        width: 70px;
        background: rgba(255, 255, 255, .3);
        transform: rotate(20deg);
    }
    .btn-input:hover:before {
        left: 210px;
        transition: all .7s;
    }
    .btn-input--login{
        background: #ebb948;
    }
    .btn-input--register{
        background: #c8371a;
    }
    .modal-footer{
        color: #302e39;
        width: 100%;
        border-top: solid 1px;
        padding-top: 8px;
    }
    #forgot-password{
        color: #302e39;
        font-size: 12px;
    }
    #forgot-password:hover{
        color: #c8371a;
        cursor: pointer;
    }
  .login-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0000001F; cursor: auto; } 

  @media only screen and (max-width: 800px){
    .login-modal { position: fixed; top: 0; width: 100%; height: 100%; } 
    .login-modal-con { position: absolute; left: 0; right: 0; margin: 0 4%; top: 31%; transform: translateY(-50%); max-width: 410px; margin: 0 auto; } 
 
    .login-modal-con form { display: flex; flex-direction: column; } 
  }
</style>