<template>
    <div class="admin-login">
        <h2>Administrator Login</h2>
        <form @submit.prevent="submitForm">
            <input v-model="formData.username" placeholder="Username" type="text" />
            <input v-model="formData.password" placeholder="Password" type="password" />
            <button @click="submitForm">Login</button>
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
    .admin-login form{
        display: flex;
        flex-direction: column;
        max-width: 500px;
        margin: 0 auto;
        position: relative;
    }
    .login-message {color: red; text-align: center; margin-top: 15px;}
</style>