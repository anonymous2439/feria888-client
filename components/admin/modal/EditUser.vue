<template>
    <div class="edit-modal">
        <div class="edit-modal-overlay modal-overlay" @click="() => {register_is_active = false}"></div>
        <div class="edit-modal-con">
            
            <input v-model="formData.username" placeholder="Username" type="text" required />
            <input v-model="formData.email" placeholder="Email" type="email" required />
            <input v-model="formData.phone_number" placeholder="Phone Number" type="text" required />
            <select v-model="formData.type_id">
                <!-- <option value="">Select user type</option> -->
                <option v-for="(user_type, i) in user_types" :key="i" :value="user_type.id">
                    {{ user_type.name }}
                </option>
            </select>
            <p style="color:black;">{{ message }}</p>
            <a @click="edit_modal_is_active = false">Cancel</a> | 
            <a @click="submitForm">Update</a>            

        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const edit_modal_is_active = useState('edit_modal_is_active');    
    const user_info = useCookie('user_info')
    const {value:user_types} = useState('user_types')
    const user_to_edit = useState('user_to_edit').value

    let formData = {
        username: user_to_edit.username,
        email: user_to_edit.email,
        phone_number: user_to_edit.phone_number,
        type_id: user_to_edit.type_id ? user_to_edit.type_id : 1,
    }
    
    // submit update user form
    async function submitForm() {
        const response = await $fetch(`${runTimeConfig.public.baseURL}/api/user/edit/${user_to_edit.id}`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer '+user_info.value.token,
            },
            body: JSON.stringify(formData)
        });
        // if(response.user)
        //     message.value = "You have successfully updated a user!"
        window.location.reload(true)
    }
</script>

<style scoped>
    .edit-modal { position: absolute; right: 0; top: 100%; z-index: 500; } 
  .edit-modal-con { background: #fff; padding: 20px; border-radius: 5px;position: relative; cursor: default;} 
  .edit-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0000001F; cursor: auto; } 

  @media only screen and (max-width: 800px){
    .edit-modal { position: fixed; top: 0; width: 100%; height: 100%; } 
    .edit-modal-con { position: absolute; left: 0; right: 0; margin: 0 4%; top: 31%; transform: translateY(-50%); max-width: 410px; margin: 0 auto; } 
 
    .edit-modal-con form { display: flex; flex-direction: column; } 
  }
</style>