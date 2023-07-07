<template>
    <div class="admin-login">
        <h2>Administrator Login</h2><br />
        <form @submit.prevent="submitForm">
            <input v-model="formData.username" placeholder="Username" type="text" />
            <input v-model="formData.password" placeholder="Password" type="password" />
            <button @click="submitForm" class="btn-input btn-input--admin-login">Login</button>
            <p class="login-message">{{ login_message }}</p>
        </form>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    definePageMeta({
        layout: "admin-login",
    });

    const login_message = useState('login_message', () => '')

    let formData = {
        'email': 'user@email.com',
        'password': 'user',
    }

    async function submitForm() {
        useFetch(`${runTimeConfig.public.baseURL}/api/login`, {
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(({data:response}) => {
            if(response.value){                        
                login_message.value = response.value.message
                if(response.value.success == 1){
                    const cookie = useCookie('user_info')
                    cookie.value = response.value
                    window.location.replace("/admin")
                }
            }
            else
                console.log("An error occured while trying to login")
        })
    }
</script>

<style>
    .admin-login{
        padding-top: 5%;
    }
    .admin-login form{
        display: flex;
        flex-direction: column;
        max-width: 300px;
        margin: 0 auto;
        position: relative;
    }
    .admin-login form input{
        width: 300px;
        padding: 12px 20px;
        margin: 8px 0px;
        box-sizing: border-box;
        border: 1px solid #c8371a;
        border-radius: 5px;
    }
    input:focus{
        outline: 2px solid #ebb948;
    }
    .login-message {color: red; text-align: center; margin-top: 15px;}
    
</style>