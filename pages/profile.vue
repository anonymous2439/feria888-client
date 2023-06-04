<template>
    <div class="profile-page">
        <div class="wrapper">
            <h2 class="page-title">User Profile</h2>
            <ul>
                <li>Email: {{ user.email }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const user_info = useCookie('user_info')

    const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/user/get`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer '+user_info.value.token,
        },
    });

    const user = response.value

</script>