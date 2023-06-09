<template>
    <div class="admin-login">
        <form @submit.prevent="submitForm">
            <input v-model="formData.username" placeholder="Username" type="text" />
            <input v-model="formData.password" placeholder="Password" type="password" />
            <button @click="submitForm">Login</button>
        </form>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    definePageMeta({
        layout: "login",
    });

    let formData = {
        'email': 'user@email.com',
        'password': 'user',
    }

    async function submitForm() {
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/login`, {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        const cookie = useCookie('user_info')
        cookie.value = response.value
        window.location.replace("/admin")
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
</style>