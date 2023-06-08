<template>
    <div class="users-page">
        <h2 class="page-title">Users</h2>
        <a @click="() => add_modal_is_active = !add_modal_is_active">Add</a>
        <table id="tbl-users" class="display">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>User Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, i) in users" :key="i">
                    <td>{{ user.id }}</td>
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone_number }}</td>
                    <td>{{ user.type }}</td>
                    <td>(<a @click="onEditClick(user)">Edit</a> <a @click="onDeleteClick(user.id)">Delete</a>)</td>
                </tr>
            </tbody>
        </table>
    </div>
    <AdminModalAddUser v-if="add_modal_is_active" />
    <AdminModalEditUser v-if="edit_modal_is_active" />
</template>

<script setup>
    definePageMeta({
        layout: "admin",
    });
    const runTimeConfig = useRuntimeConfig()
    const user_info = useCookie('user_info')
    const add_modal_is_active = useState('add_modal_is_active', () => false)
    const edit_modal_is_active = useState('edit_modal_is_active', () => false)
    const user_to_edit = useState('user_to_edit', () => {})
    const is_loading = useState('is_loading', () => false)

    // get users data
    const {data:users_data, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/users`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer '+user_info.value.token,
        },
    });
    const users = users_data.value

    // get user types data
    const user_types_data = await $fetch(`${runTimeConfig.public.baseURL}/api/user/types`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer '+user_info.value.token,
        },
    });
    const user_types = useState('user_types', () => user_types_data)

    // on edit click
    function onEditClick(user){
        edit_modal_is_active.value = true
        user_to_edit.value = user
    }

    async function onDeleteClick(id){
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/user/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer '+user_info.value.token,
            },
        });
        window.location.reload(true)
    }

</script>