<template>
    <div class="users-page">
        <h2 class="page-title">Users</h2>
        <div class="table-nav">
            <a @click="() => add_modal_is_active = !add_modal_is_active">Add</a>
        </div>
        <Datatables>
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
                    <td>(<a @click="onEditClick(user)">Edit</a> <a @click="onDeleteClick(user)">Delete</a>)</td>
                </tr>
            </tbody>
        </Datatables>
    </div>
    <AdminModalAddUser v-if="add_modal_is_active" />
    <AdminModalEditUser v-if="edit_modal_is_active" />
    <AdminModalDeleteUser v-if="delete_modal_is_active" />
</template>

<script setup>
    definePageMeta({
        layout: "admin",
    });
    const runTimeConfig = useRuntimeConfig()
    const user_info = useCookie('user_info')
    const add_modal_is_active = useState('add_modal_is_active', () => false)
    const edit_modal_is_active = useState('edit_modal_is_active', () => false)
    const delete_modal_is_active = useState('delete_modal_is_active', () => false)
    const user_to_edit = useState('user_to_edit', () => {})
    const user_to_delete = useState('user_to_delete', () => {})
    const content_is_loading = useState('content_is_loading')
    content_is_loading.value = true

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

    content_is_loading.value = false

    // on edit click
    function onEditClick(user){
        edit_modal_is_active.value = true
        user_to_edit.value = user
    }

    async function onDeleteClick(user){
        delete_modal_is_active.value = true
        user_to_delete.value = user
    }

</script>

<style scoped>
    .table-nav a{cursor: pointer; }
</style>