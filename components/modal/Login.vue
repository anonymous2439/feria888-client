<template>
    <div id="login-modal" class="login-modal">
        <div class="login-modal-overlay modal-overlay" @click="() => {login_is_active = false}"></div>
        <div class="login-modal-con">
            
                <form @submit.prevent="submitForm">
                    <input v-model="formData.username" placeholder="Username" type="text" />
                    <input v-model="formData.password" placeholder="Password" type="password" />
                    <button @click="submitForm" class="btn-input btn-input--login">
                        <i class="fa fa-sign-in"></i> Login</button>                
                    <div v-if="is_loading" style="color:#1a1a1a">
                        <img src="~/assets/images/loader.gif" id="loader" />
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
    input {
        width: 200px;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 1px solid #c8371a;
        border-radius: 5px;
    }
    input:focus{
        outline: 2px solid #ebb948;
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
    #loader{
        width:20%;
        padding-top: 10px;
    }
  .login-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0000001F; cursor: auto; } 

  @media only screen and (max-width: 800px){
    .login-modal { 
        position: fixed; 
        top: 0; 
        width: 100%; 
        height: 100%; 
    } 
    .login-modal-con { 
        position: absolute; 
        left: 0; 
        right: 0; 
        margin: 0 4%; 
        top: 31%; 
        transform: translateY(-50%); 
        max-width: 300px; 
        margin: 0 auto; 
    } 

    .login-modal-con form input{ 
        display: flex; 
        flex-direction: column; 
        width:100%;
        padding: 10px;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;         /* Opera/IE 8+ */
    }
    .btn-input {
        width: 100%;
    } 
  }
  @media only screen and (max-width: 600px){
    .login-modal { 
        position: fixed; 
        top: 0; 
        width: 100%; 
        height: 100%; 
    } 
    .login-modal-con { 
        position: absolute; 
        left: 0; 
        right: 0; 
        margin: 0 4%; 
        top: 31%; 
        transform: translateY(-50%); 
        max-width: 200px; 
        margin: 0 auto; 
    } 

    .login-modal-con form input{ 
        display: flex; 
        flex-direction: column; 
        width:100%;
        padding: 10px;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;         /* Opera/IE 8+ */
    }
  }
</style>