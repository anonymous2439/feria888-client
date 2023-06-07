<template>
    <div class="add-modal">
        <div class="add-modal-overlay modal-overlay" @click="() => {add_modal_is_active = false}"></div>
        <div class="add-modal-con">
            
                <input v-model="formData.username" placeholder="Username" type="text" required />
                <input v-model="formData.email" placeholder="Email" type="email" required />
                <input v-model="formData.password" placeholder="Password" type="password" requuired />
                <input v-model="formData.password_confirmation" placeholder="Confirm Password" type="password" required />
                <input v-model="formData.phone_number" placeholder="Phone Number" type="text" required />
                <select v-model="formData.type_id">
                    <!-- <option disabled value="">Select user type</option> -->
                    <option v-for="(user_type, i) in user_types" :key="i" :value="user_type.id" :selected="i == 0">
                        {{ user_type.name }}
                    </option>
                </select>
                <p style="color:black;">{{ message }}</p>
                <button @click="submitForm">Add</button>

        </div>
    </div>
</template>

<script setup>
    const runTimeConfig = useRuntimeConfig()
    const add_modal_is_active = useState('add_modal_is_active');    
    const user_info = useCookie('user_info')
    const {value:user_types} = useState('user_types')
    let formData = {
        type_id: user_types.length > 0 ? user_types[0].id : null
    }
    
    // submit add user form
    async function submitForm() {
        const response = await $fetch(`${runTimeConfig.public.baseURL}/api/user/add`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer '+user_info.value.token,
            },
            body: JSON.stringify(formData)
        });
        if(response.user)
            message.value = "You have successfully added a user!"
        window.location.reload(true)
    }
    
</script>

<style scoped>
    .add-modal { position: absolute; right: 0; top: 100%; z-index: 500; } 
  .add-modal-con { background: #fff; padding: 20px; border-radius: 5px;position: relative; cursor: default;} 
  .add-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0000001F; cursor: auto; } 

  @media only screen and (max-width: 800px){
    .add-modal { position: fixed; top: 0; width: 100%; height: 100%; } 
    .add-modal-con { position: absolute; left: 0; right: 0; margin: 0 4%; top: 31%; transform: translateY(-50%); max-width: 410px; margin: 0 auto; } 
 
    .add-modal-con form { display: flex; flex-direction: column; } 
  }
</style>