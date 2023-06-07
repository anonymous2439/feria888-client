<template>
    <div class="profile-page">
        <div class="wrapper">
            <h2 class="page-title">User Profile</h2> 
            <a @click="editProfile">Edit</a> <a @click="cpassword_is_active = true">Change Password</a>
            <ul>
                <li>
                    Email: 
                    <span v-if="is_editing_profile == false">{{ user.email }}</span>
                    <input v-else v-model="profile_form.email" />
                </li>
                <li>
                    Phone Number: 
                    <span v-if="is_editing_profile == false">{{ user.phone_number }}</span>
                    <input v-else v-model="profile_form.phone_number" />
                </li>
            </ul>
            <button v-if="is_editing_profile" @click="submitEditForm">Submit</button>
        </div>
        <ModalChangePassword v-if="cpassword_is_active" />
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const user_info = useCookie('user_info')
    const is_editing_profile = useState('is_editing_profile', () => false)
    const cpassword_is_active = useState('cpassword_is_active', () => false);

    const {data:response, pending, refresh} = await useFetch(`${runTimeConfig.public.baseURL}/api/user/get`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer '+user_info.value.token,
        },
    });
    const user = response.value
    const profile_form = {
        email: user.email,
        phone_number: user.phone_number,
    }

    function editProfile(){
        is_editing_profile.value = !is_editing_profile.value
    }    

    async function submitEditForm(){
        const user_info = useCookie('user_info')
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