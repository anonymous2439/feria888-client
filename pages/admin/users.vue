<template>
    <div class="users-page">
        <h2 class="page-title">Users</h2>
        <a @click="() => add_modal_is_active.value = !add_modal_is_active.value">Add</a>
        <table>
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
                    <td>(<a @click="onEditClick">Edit</a> <a @click="onDeleteClick(user.id)">Delete</a>)</td>
                </tr>
            </tbody>
        </table>
    </div>
    <AdminModalEditUser v-if="is_editting" />
    <AdminModalAddUser v-if="add_modal_is_active" />
</template>

<script setup>
    definePageMeta({
        layout: "admin",
    });
    const runTimeConfig = useRuntimeConfig()
    const user_info = useCookie('user_info')
    const add_modal_is_active = useState('add_modal_is_active', () => false)
    let is_editting = false

    const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/users`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer '+user_info.value.token,
        },
    });

    const users = response.value

    function onEditClick(){
        is_editting = true
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

    async function submitEditForm(){
        const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/user/update`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer '+user_info.value.token,
            },
            body: JSON.stringify(profile_form)
            
        });
        window.location.reload(true)
    }

</script>