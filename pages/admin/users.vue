<template>
    <div class="users-page">
        <h2 class="page-title">Users</h2>
        <ul>
            <li v-for="(user, i) in users" :key="i">
                {{ user.email }} | {{ user.type }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "admin",
    });
    const runTimeConfig = useRuntimeConfig()
    const user_info = useCookie('user_info')

    const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/users`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer '+user_info.value.token,
        },
    });

    const users = response.value

</script>