<template>
    <div class="register-modal">
        <div class="register-modal-overlay modal-overlay" @click="() => {register_is_active = false}"></div>
        <div class="register-modal-con">
            
                <form @submit.prevent="submitForm">
                    <input v-model="formData.username" placeholder="Username" type="text" required />
                    <input v-model="formData.email" placeholder="Email" type="email" required />
                    <input v-model="formData.password" placeholder="Password" type="password" requuired />
                    <input v-model="formData.password_confirmation" placeholder="Confirm Password" type="password" required />
                    <input v-model="formData.phone_number" placeholder="Phone Number" type="text" required />
                    <p style="color:black;">{{ message }}</p>
                    <button @click="submitForm" class="btn-input btn-input--register">Register</button>
                    <p class="error_message">{{ register_message }}</p>
                </form>
                <hr>
                <div>
                    Already have an account?<nuxt-link @click="() => {register_is_active = !register_is_active}" 
                                class="hover-underline-animation">Sign in</nuxt-link>
                </div>                

        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const register_is_active = useState('register_is_active', () => false);
    let formData = {}
    const register_message = useState('register_message', () => '')
    
    async function submitForm() {
        useFetch(`${runTimeConfig.public.baseURL}/api/register`, {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(({data:response}) => {
            if(response.value.success)
                register_message.value = "You have successfully registered!"
            else
                register_message.value = "Something went wrong while trying to register your information"
        })        
    }
</script>

<style scoped>
    .register-modal { position: absolute; right: 0; top: 100%; z-index: 500; } 
  .register-modal-con { background: #fff; color: #000000; padding: 20px; border-radius: 5px;position: relative; cursor: default;}
    input {
        width: 200px;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 1px solid #c8371a;
        border-radius: 4px;
    }
    input:focus{
        outline: 2px solid #ebb948;
    }
    
    #already{
        color: #302e39;
        font-size: 12px;
    }
    #already:hover{
        color: #c8371a;
        cursor: pointer;
    }
    
  .register-modal-overlay { 
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background: #0000001F; 
        cursor: auto; 
    } 

  @media only screen and (max-width: 800px){
    .register-modal { 
        position: fixed; 
        top: 0; 
        width: 100%; 
        height: 100%; 
    } 
    .register-modal-con { 
        position: absolute; 
        left: 0; 
        right: 0; 
        margin: 0 4%; 
        top: 31%; 
        transform: translateY(-50%); 
        max-width: 300px; 
        margin: 0 auto;
    } 
 
    .register-modal-con form input{ 
        display: flex; 
        flex-direction: column;
        width:100%;
        padding: 10px;
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box;    /* Firefox, other Gecko */
        box-sizing: border-box;         /* Opera/IE 8+ */
         
    } 
    }
    @media only screen and (max-width: 600px){
    .register-modal { 
        position: fixed; 
        top: 0; 
        width: 100%; 
        height: 100%; 
    } 
    .register-modal-con { 
        position: absolute; 
        left: 0; 
        right: 0; 
        margin: 0 4%; 
        top: 31%; 
        transform: translateY(-50%); 
        max-width: 200px; 
        margin: 0 auto;
        margin-top: 30px; 
    } 

    .register-modal-con form input{ 
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